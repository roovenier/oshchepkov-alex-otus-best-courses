import {
  getAllCourses,
  getCourseById,
  createNewCourse,
  editCourseById,
} from './courses';

describe('Courses API', () => {
  it('should return all courses', () => {
    const allCourses = getAllCourses();

    expect(allCourses).toBe([
      {
        id: 'test-course-1',
        title: 'My course',
        description: 'My course description',
        lessons: [],
      },
      {
        id: 'test-course-2',
        title: 'My course 2',
        description: 'My course 2 description',
        lessons: [],
      },
    ]);
  });

  it('should return course by id', () => {
    const course = getCourseById('test-course-1');

    expect(course).toBe({
      id: 'test-course-1',
      title: 'My course',
      description: 'My course description',
      lessons: [],
    });
  });

  it('should create and return new course', () => {
    const newCourse = createNewCourse({
      title: 'My course 3',
      description: 'My course 3 description',
    });

    expect(newCourse).toBe({
      id: 'test-course-3',
      title: 'My course 3',
      description: 'My course 3 description',
      lessons: [],
    });
  });

  it('should edit and return updated course', () => {
    const newCourse = editCourseById('test-course-3', {
      title: 'My the best course 3',
    });

    expect(newCourse).toBe({
      id: 'test-course-3',
      title: 'My the best course 3',
      description: 'My course 3 description',
      lessons: [],
    });
  });
});
