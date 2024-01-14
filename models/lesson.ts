import {
  Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, ManyToMany, JoinTable, ManyToOne,
} from 'typeorm';
import File from './file';
import Link from './link';
import Course from './course';

@Entity()
export default class Lesson {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      title: string;

    @Column()
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
