import {
  Entity, PrimaryGeneratedColumn, Column, ManyToOne,
} from 'typeorm';
import User from './user';

@Entity()
export default class Comment {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      text: string;

    @Column()
      createdAt: number;

    @ManyToOne(() => User, (user) => user.comments)
      author: User;
}
