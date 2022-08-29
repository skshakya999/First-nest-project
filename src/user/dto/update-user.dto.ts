import { IsNotEmpty, IsPhoneNumber} from "class-validator"

export class UpdateUserDto {
   
    @IsNotEmpty()
    mobile: string;
    @IsNotEmpty()
    newMobile: string;
    
 }