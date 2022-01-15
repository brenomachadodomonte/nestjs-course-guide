import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('message')
export class MessageController {

    @Get()
    listMessages() {
        return { message: 'GET MESSAGES' };
    }

    @Post()
    createMessage(
        @Body() body: any,
    ) {
        console.log(body);
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
