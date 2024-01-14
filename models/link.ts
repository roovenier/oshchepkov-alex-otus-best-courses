import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Link {
    @PrimaryGeneratedColumn()
      id: number;

    @Column()
      value: string;
}
