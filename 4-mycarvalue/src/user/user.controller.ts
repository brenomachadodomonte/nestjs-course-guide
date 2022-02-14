import { Body, ClassSerializerInterceptor, Controller, Delete, Get, Param, Patch, Post, Query, UseInterceptors } from '@nestjs/common';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private service: UserService){}

    @Post('/signup')
    createUser(
        @Body() body: CreateUserDto
    ){
        return this.service.create(body);
    }

    @UseInterceptors(SerializeInterceptor)
    @Get('/:id')
    findUser(
        @Param('id') id: number
    ) {
        console.log('handler is runnig');
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
