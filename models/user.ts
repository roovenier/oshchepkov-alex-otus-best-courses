import {
  Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany,
} from 'typeorm';
import Role from './role';
import Comment from './comment';

@Entity()
export default class User {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      name: string;

    @OneToOne(() => Role)
    @JoinColumn()
      role: Role;

    @OneToMany(() => Comment, (comment) => comment.author)
      comments: Comment[];
}
