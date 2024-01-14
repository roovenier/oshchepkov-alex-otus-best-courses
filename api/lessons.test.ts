import {
  getLessonById,
  createNewLesson,
  editLessonById,
  deleteLessonById,
} from './lessons';

describe('Lessons API', () => {
  it('should return lesson by id', () => {
    const lesson = getLessonById('test-lesson-1');

    expect(lesson).toBe({
      id: 'test-lesson-1',
      title: 'My lesson',
      description: 'My lesson description',
      video: '',
      links: [],
      files: [],
    });
  });

  it('should create and return new lesson', () => {
    const lesson = createNewLesson('test-lesson-2');

    expect(lesson).toBe({
      id: 'test-lesson-2',
      title: 'My lesson',
      description: 'My lesson description',
      video: '',
      links: [],
      files: [],
    });
  });

  it('should edit and return updated lesson', () => {
    const lesson = editLessonById('test-lesson-2', {
      title: 'New title',
    });

    expect(lesson).toBe({
      id: 'test-lesson-2',
      title: 'New title',
      description: 'My lesson description',
      video: '',
      links: [],
      files: [],
    });
  });

  it('should delete and return id of removed lesson', () => {
    const lessonId = deleteLessonById('test-lesson-2');

    expect(lessonId).toBe('test-lesson-2');
  });
});
