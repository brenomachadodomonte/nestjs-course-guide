import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private repo: Repository<User>
    ){}

    create(dto: CreateUserDto) {
        const { email, password } = dto;
        const user = this.repo.create({ email, password });

        return this.repo.save(user);
    }

    findOne(id: number) {
        return this.repo.findOneBy({ id });
    }

    find(email: string) {
        return this.repo.find({ where: { email }});
    }

    async update(id: number, attrs: Partial<User>) {
        const user = await this.findOne(id);

        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    
}
