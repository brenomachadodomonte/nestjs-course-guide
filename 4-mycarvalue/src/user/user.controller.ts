import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
@Serialize(UserDto)
export class UserController {

    constructor(private service: UserService, private authService: AuthService){}

    @Post('/signup')
    createUser(
        @Body() body: CreateUserDto
    ){
        return this.authService.signup(body.email, body.password);
    }

    @Get('/:id')
    findUser(
        @Param('id') id: number
    ) {
        return this.service.findOne(id);
    }

    @Get()
    findAllUsers(
        @Query('email') email: string
    ) {
        return this.service.find(email);
    }

    @Patch('/:id')
    updateUser(
        @Param('id') id: number,
        @Body() dto: UpdateUserDto
    ) {
        return this.service.update(id, dto);
    }

    @Delete('/:id')
    delete(
        @Param('id') id: number
    ){
        return this.service.delete(id);
    }

}
