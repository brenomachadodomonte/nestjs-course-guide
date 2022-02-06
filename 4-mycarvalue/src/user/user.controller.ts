import { Body, Controller, Get, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';
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

    @Get('/:id')
    async findUser(
        @Param('id') id: number
    ) {
        const user = await this.service.findOne(id);

        if(!user) {
            throw new NotFoundException(`User with id ${id} not found`);
        }

        return user;
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

}
