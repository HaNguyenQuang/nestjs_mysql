import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AdminRole } from './admin_role.entity';

@Injectable()
export class AdminRolesService {

    constructor(@InjectRepository(AdminRole) private adminRolesRepository: Repository<AdminRole>) { }

    async getAdminRoles(): Promise<AdminRole[]> {
        return await this.adminRolesRepository.find();
    }

    async getAdminRole(_id: number): Promise<AdminRole[]> {
        return await this.adminRolesRepository.find({
            select: ["roleName", "roleCode", "roleResource"],
            where: [{ "id": _id }]
        });
    }

    async updateAdminRole(adminRole: AdminRole) {
        this.adminRolesRepository.save(adminRole)
    }

    async deleteAdminRole(adminRole: AdminRole) {
        this.adminRolesRepository.delete(adminRole);
    }
}