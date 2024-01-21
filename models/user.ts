import {
  Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany,
} from 'typeorm';
import { IsDefined } from 'class-validator';
import Role from './role';
import Comment from './comment';

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
      id: number;

    @Column({ nullable: false })
    @IsDefined()
      name: string;

    @OneToOne(() => Role)
    @JoinColumn()
      role: Role;

    @OneToMany(() => Comment, (comment) => comment.author)
      comments: Comment[];
}
