import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Admin {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' })  
    username:string;

    @Column({ type: 'int' }) 
    isActive:number;

    @CreateDateColumn({ type: 'timestamp'})
    createdAt:Date;

    @UpdateDateColumn({ type: 'timestamp'})
    updatedAt:Date;

    @Column({ type: 'varchar' })  
    email:string;

    @Column({ type: 'int' }) 
    external:number;

    @Column({ type: 'varchar' })  
    apiKey:string;

    @Column({ type: 'varchar' })  
    dtype:string;

    @Column({ type: 'varchar' })  
    plainPassword:string;

    @Column({ type: 'varchar' })  
    phone:string;

    @Column({ type: 'int' }) 
    role_id:number;
}