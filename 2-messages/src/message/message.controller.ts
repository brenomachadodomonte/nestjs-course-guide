import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';

@Controller('message')
export class MessageController {

    @Get()
    listMessages() {
        return { message: 'GET MESSAGES' };
    }

    @Post()
    createMessage(
        @Body() createDto: CreateMessageDto,
    ) {
        console.log(createDto);
        return { message: 'CREATE MESSAGE' }
    }

    @Get('/:id')
    getMessage(
        @Param('id') id: string
    ){
        console.log(id);
        return { message: 'GET PARTICULAR MESSAGE' }
    }

}
