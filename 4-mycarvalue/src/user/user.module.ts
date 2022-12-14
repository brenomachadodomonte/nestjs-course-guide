import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { CurrentUserInteceptor } from './interceptors/current-user.interceptor';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [
    UserService, 
    AuthService, 
    {
      provide: APP_INTERCEPTOR,
      useClass: CurrentUserInteceptor
    }
  ],
  imports: [
    TypeOrmModule.forFeature([User])
  ]
})
export class UserModule {}
