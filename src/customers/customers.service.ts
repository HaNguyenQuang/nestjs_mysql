import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './customer.entity';

@Injectable()
export class CustomersService {

    constructor(@InjectRepository(Customer) private customersRepository: Repository<Customer>) { }

    async getCustomers(customer: Customer): Promise<Customer[]> {
        return await this.customersRepository.find();
    }

    async getCustomer(_id: number): Promise<Customer[]> {
        return await this.customersRepository.find({
            select: ["firstName", "lastName", "address"],
            where: [{ "id": _id }]
        });
    }

    async updateCustomer(customer: Customer) {
        this.customersRepository.save(customer)
    }

    async deleteCustomer(customer: Customer) {
        this.customersRepository.delete(customer);
    }
}