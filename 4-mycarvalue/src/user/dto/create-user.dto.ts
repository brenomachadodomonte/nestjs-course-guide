import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class CreateUserDto {

    @IsNotEmpty()
    @IsEmail()
    @IsString()
    email: string;

    @IsString()
    password: string;

}