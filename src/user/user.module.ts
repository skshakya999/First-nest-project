import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "./schema/userSchema";
import { Blog,BlogSchema } from "./schema/blogSchema";


@Module({
    imports:[
        MongooseModule.forFeature([{ name: User.name, schema: UserSchema },{name:Blog.name,schema:BlogSchema}]),
    ],
    providers: [UserService],
    controllers: [UserController],

})

export class UserModule{}