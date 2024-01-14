import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import Lesson from './lesson';

@Entity()
export default class Course {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      title: string;

    @Column()
      description: string;

    @OneToMany(() => Lesson, (lesson) => lesson.course)
      lessons: Lesson[];
}
