import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class AdminRole {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })  
    roleName:string;

    @Column({ type: 'varchar' }) 
    roleCode:string;

    @Column({ type: 'int' }) 
    master:number;

    @Column({ type: 'varchar' }) 
    roleResource:string;
}