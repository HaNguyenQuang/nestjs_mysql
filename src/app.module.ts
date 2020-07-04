import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { AdminsModule } from './admins/admins.module';
import { AdminRolesModule } from './admin_roles/admin_roles.module';


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    CustomersModule,
    AdminsModule,
    AdminRolesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
