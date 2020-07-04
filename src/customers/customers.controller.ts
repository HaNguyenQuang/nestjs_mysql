
import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { CustomersService } from './customers.service';
import { Customer } from './customer.entity';

@Controller('customers')
export class CustomersController {

    constructor(private service: CustomersService) { }

    @Get()
    getAll(): Promise<Customer[]> {
        return this.service.getCustomers();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getCustomer(params.id);
    }

    @Post()
    create(@Body() customer: Customer) {
        return this.service.createCustomer(customer);
    }

    @Put()
    update(@Body() customer: Customer) {
        return this.service.updateCustomer(customer);
    }

    @Delete(':id')
    deleteCustomer(@Param() params) {
        return this.service.deleteCustomer(params.id);
    }
}