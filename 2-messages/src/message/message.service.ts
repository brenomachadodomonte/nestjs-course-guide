import { Injectable, NotFoundException } from "@nestjs/common";
import { MessageRepository } from "./message.repository"

@Injectable()
export class MessageService {

    constructor(public messagesRepo: MessageRepository) {}

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