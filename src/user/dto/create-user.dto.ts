import { IsEmail, IsEmpty, IsEnum, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    fname: string;
  
    @IsNotEmpty()
    @IsString()
    lname: string;

    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    @IsString()
    password: string

}