import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Customer {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    firstName:string;

    @Column({ type: 'varchar' }) 
    lastName:string;

    @Column({ type: 'varchar' }) 
    customerId:string;

    @Column({ type: 'varchar' }) 
    address:string;

    @CreateDateColumn({ type: 'timestamp'})
    createdAt:Date;

    @Column({ type: 'int' })  
    levelId:number;

    @UpdateDateColumn({ type: 'timestamp'})
    updatedAt:Date;

    @Column({ type: 'varchar' }) 
    currency:string;

    @Column({ type: 'varchar' })  
    levelPercent:string;

    @Column({ type: 'varchar' })  
    email:string;

    @Column({ type: 'varchar' })  
    phone:string;

    @Column({ type: 'int' }) 
    active:number;

    @Column({ type: 'float' }) 
    averageTransactionAmount:number;

    @Column({ type: 'int' }) 
    transactionsCount:number;

    @Column({ type: 'int' }) 
    transactionsAmount:number;

    @Column({ type: 'int' })  
    transactionsAmountWithoutDeliveryCosts:number;

    @Column({ type: 'int' }) 
    amountExcludedForLevel:number;

    @Column({ type: 'int' })  
    agreement1:number;

    @Column({ type: 'int' }) 
    agreement2:number;

    @Column({ type: 'int' }) 
    agreement3:number;
}