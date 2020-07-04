import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminRolesService } from './admin_roles.service';
import { AdminRolesController } from './admin_roles.controller';
import { AdminRole } from './admin_role.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AdminRole])],
  providers: [AdminRolesService],
  controllers: [AdminRolesController],
})

export class AdminRolesModule { }