import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { MessageService } from './message.service';

@Controller('message')
export class MessageController {

    constructor(public messageService: MessageService){}

    @Get()
    listMessages() {
        return this.messageService.findAll();
    }

    @Post()
    createMessage(
        @Body() createDto: CreateMessageDto,
    ) {
        return this.messageService.create(createDto.content);
    }

    @Get('/:id')
    getMessage(
        @Param('id') id: string
    ){
        return this.messageService.findOne(id);
    }

}
