import { Controller, Get } from '@nestjs/common';

@Controller('message')
export class MessageController {

    @Get()
    listMessages() {
        return { message: 'GET MESSAGES' };
    }
    
}
