import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type BlogDocument = Blog & Document;

@Schema()
export class Blog{

    @Prop()
    authorId:string

    @Prop()
    title:string

    @Prop()
    description:string
}

export const BlogSchema = SchemaFactory.createForClass(Blog)