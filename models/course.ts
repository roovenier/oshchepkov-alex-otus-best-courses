import {
  Entity, PrimaryGeneratedColumn, Column, OneToMany,
} from 'typeorm';
import { IsDefined } from 'class-validator';
import Lesson from './lesson';

@Entity()
export default class Course {
    @PrimaryGeneratedColumn()
      id: number;

    @Column({ nullable: false })
    @IsDefined()
      title: string;

    @Column({ nullable: false })
    @IsDefined()
      description: string;

    @OneToMany(() => Lesson, (lesson) => lesson.course)
      lessons: Lesson[];
}
