import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
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
    findUser(
        @Param('id') id: number
    ) {
        return this.service.findOne(id);
    }

}
