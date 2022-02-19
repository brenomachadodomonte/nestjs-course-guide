import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { CurrentUserInteceptor } from './interceptors/current-user.interceptor';
import { UserController } from './user.controller';
import { User } from './user.entity';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, AuthService, CurrentUserInteceptor],
  imports: [
    TypeOrmModule.forFeature([User])
  ]
})
export class UserModule {}
