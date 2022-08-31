import { IsNotEmpty, IsPhoneNumber} from "class-validator"

export class LoginUserDto {
    @IsNotEmpty()
    email:string
 
    @IsNotEmpty()
    password: string;
  
    
 }