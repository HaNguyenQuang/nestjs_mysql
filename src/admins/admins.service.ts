import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Admin } from './admin.entity';

@Injectable()
export class AdminsService {

    constructor(@InjectRepository(Admin) private adminsRepository: Repository<Admin>) { }

    async getAdmins(admin: Admin): Promise<Admin[]> {
        return await this.adminsRepository.find();
    }

    async getAdmin(_id: number): Promise<Admin[]> {
        return await this.adminsRepository.find({
            select: ["username", "email", "phone"],
            where: [{ "id": _id }]
        });
    }

    async updateAdmin(admin: Admin) {
        this.adminsRepository.save(admin)
    }

    async deleteAdmin(admin: Admin) {
        this.adminsRepository.delete(admin);
    }
}