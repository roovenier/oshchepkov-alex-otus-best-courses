import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Role {
    @PrimaryGeneratedColumn()
      id: number;

    @Column({
      type: 'enum',
      enum: ['admin', 'user'],
      default: 'user',
    })
      title: string;
}
