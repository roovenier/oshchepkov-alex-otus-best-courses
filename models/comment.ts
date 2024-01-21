import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import { IsDefined } from 'class-validator';
import User from './user';

@Entity()
export default class Comment {
    @PrimaryGeneratedColumn()
      id: number;

    @Column({ nullable: false })
    @IsDefined()
      text: string;

    @Column({ nullable: false })
    @IsDefined()
      createdAt: number;

    @ManyToOne(() => User, (user) => user.comments)
      author: User;
}
