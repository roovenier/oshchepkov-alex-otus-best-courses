import { IsDefined } from 'class-validator';
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export default class Link {
    @PrimaryGeneratedColumn()
      id: number;

    @Column({ nullable: false })
    @IsDefined()
      value: string;
}
