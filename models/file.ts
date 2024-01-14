import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class File {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      path: string;
}
