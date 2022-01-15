import { Controller, Get, Post } from '@nestjs/common';

@Controller('message')
export class MessageController {

    @Get()
    listMessages() {
        return { message: 'GET MESSAGES' };
    }

    @Post()
    createMessage() {
        return { message: 'CREATE MESSAGE' }
    }

    @Get('/:id')
    getMessage(){
        return { message: 'GET PARTICULAR MESSAGE' }
    }

}
