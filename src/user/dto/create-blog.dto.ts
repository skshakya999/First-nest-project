import { IsNotEmpty } from "class-validator";


export class CreateBlogDto {
    @IsNotEmpty()
    authorId:string;

    @IsNotEmpty()
    title:string;

    @IsNotEmpty()
    description:string
}