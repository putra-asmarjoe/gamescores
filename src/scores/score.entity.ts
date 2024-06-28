import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Score {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  player: string;

  @Column()
  value: number;

  @Column()
  date: Date;
}
