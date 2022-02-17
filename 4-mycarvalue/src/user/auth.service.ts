import { BadRequestException, Injectable } from "@nestjs/common";
import { UserService } from "./user.service";
import { randomBytes, scrypt as _script } from "crypto";
import { promisify } from "util";
import { CreateUserDto } from "./dto/create-user.dto";

const scrypt = promisify(_script);

@Injectable()
export class AuthService {

    constructor(private userService: UserService){}

    async signup(email: string, password: string) {
        const users = await this.userService.find(email);

        if(users.length) {
            throw new BadRequestException('Email in use');
        }

        //Generate a salt
        const salt = randomBytes(8).toString('hex');

        //hash the salt and the passoword together
        const hash = await scrypt(password, salt, 32) as Buffer;

        //join the hashed result and salt together
        const result = salt + '.' + hash.toString('hex');
        
        const user = await this.userService.create({email, password: result});

        return user;
    }

    signin() {
        
    }

}