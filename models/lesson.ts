import {
  Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable, ManyToOne,
} from 'typeorm';
import { IsDefined } from 'class-validator';
import File from './file';
import Link from './link';
import Course from './course';

@Entity()
export default class Lesson {
    @PrimaryGeneratedColumn()
      id: number;

    @Column({ nullable: false })
    @IsDefined()
      title: string;

    @Column({ nullable: false })
    @IsDefined()
      description: string;

    @OneToOne(() => File)
    @JoinColumn()
      video: File;

    @ManyToMany(() => File)
    @JoinTable()
      files: File[];

    @ManyToMany(() => Link)
    @JoinTable()
      links: Link[];

    @ManyToOne(() => Course, (course) => course.lessons)
      course: Course;
}
