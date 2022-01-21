import { NotFoundException } from "@nestjs/common";
import { MessageRepository } from "./message.repository"


export class MessageService {

    messagesRepo: MessageRepository;

    constructor() {
        // Service is creating its own dependencies
        // Don't do this on real apps
        this.messagesRepo = new MessageRepository();
    }

    async findOne(id: string) {
        const message = await this.messagesRepo.findOne(id);

        if(!message) {
            throw new NotFoundException(`Message with ID ${id} not found!`);
        }

        return message;
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(message: string) {
        return this.messagesRepo.create(message);
    }
}