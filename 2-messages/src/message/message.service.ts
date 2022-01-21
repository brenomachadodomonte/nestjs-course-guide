import { MessageRepository } from "./message.repository"


export class MessageService {

    messagesRepo: MessageRepository;

    constructor() {
        // Service is creating its own dependencies
        // Don't do this on real apps
        this.messagesRepo = new MessageRepository();
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(message: string) {
        return this.messagesRepo.create(message);
    }
}