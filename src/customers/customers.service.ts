import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';
import { User } from '../users/user.entity';

@Injectable()
export class CustomersService {

    constructor(@InjectRepository(Customer) private customersRepository: Repository<Customer>) { }

    async getCustomers(): Promise<Customer[]> {
        return await this.customersRepository.find();
    }

    async getCustomer(_id: number): Promise<Customer[]> {
        return await this.customersRepository.find({
            select: ["customerId", "active", "firstName", "lastName", "email", "address", "createdAt", "levelId", "agreement1", "agreement2", "agreement3", "updatedAt", "transactionsCount", "transactionsAmount", "transactionsAmountWithoutDeliveryCosts", "amountExcludedForLevel", "averageTransactionAmount", "currency", "levelPercent"],
            where: [{ "id": _id }]
        });
    }

    async createCustomer (customer: Customer): Promise<Customer> {
        return await this.customersRepository.save(customer)
    }

    async updateCustomer(customer: Customer) {
        this.customersRepository.save(customer)
    }

    async deleteCustomer(customer: Customer) {
        this.customersRepository.delete(customer);
    }
}