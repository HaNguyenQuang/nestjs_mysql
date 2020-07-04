import { Controller, Post, Body, Get, Put, Delete,Param} from '@nestjs/common';
import { AdminRolesService } from './admin_roles.service';
import { AdminRole } from './admin_role.entity';

@Controller('adminRoles')
export class AdminRolesController {

    constructor(private service: AdminRolesService) { }
    @Get()
    getAll(): Promise<AdminRole[]>  {
        return this.service.getAdminRoles();
    }

    @Get(':id')
    get(@Param() params) {
        return this.service.getAdminRole(params.id);
    }

    @Post()
    create(@Body() adminRoles: AdminRole) {
        return this.service.createAdminRole(adminRoles);
    }

    @Put()
    update(@Body() adminRoles: AdminRole) {
        return this.service.updateAdminRole(adminRoles);
    }

    @Delete(':id')
    deleteCustomer(@Param() params) {
        return this.service.deleteAdminRole(params.id);
    }
}