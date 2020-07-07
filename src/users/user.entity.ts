import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { type } from 'os';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    fullName:string;

    @Column('date') 
    birthday:Date;

    @Column() 
    isActive:boolean;
}