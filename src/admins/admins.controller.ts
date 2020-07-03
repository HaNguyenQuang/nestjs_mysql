import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { AdminsService } from './admins.service';
import { Admin } from './admin.entity';

@Controller('admins')
export class AdminsController {

    constructor(private service: AdminsService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getAdmin(params.id);
    }

    // @Post()
    // create(@Body() admin: Admin) {
    //     return this.service.createAdmin(admin);
    // }

    @Put()
    update(@Body() admin: Admin) {
        return this.service.updateAdmin(admin);
    }

    @Delete(':id')
    deleteCustomer(@Param() params) {
        return this.service.deleteAdmin(params.id);
    }
}