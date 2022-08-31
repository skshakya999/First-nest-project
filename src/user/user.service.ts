
import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateBlogDto } from './dto/create-blog.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { Blog, BlogDocument } from './schema/blogSchema';
import { User, UserDocument } from './schema/userSchema';


@Injectable()
export class UserService {

  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    @InjectModel(Blog.name) private blogModel: Model<BlogDocument>
  ) { }

  async signUpUser(data: CreateUserDto) {

    const usrCreated = await new this.userModel(data).save()
    return {
      success: true,
      message: "User created successfully",
      usrCreated
    }
  }

  async createBlog(createBlogDto: CreateBlogDto) {
    const alreadyBlogExist = await this.blogModel.findOne({title:createBlogDto.title})
    if(alreadyBlogExist){
      return {
        success: false,
        message: "This blog title already available"
      }
    }
    const blogCreated = await new this.blogModel(createBlogDto).save()
    return {
      success: true,
      message: "Blog created successfully",
      blogCreated
    }
  }

  async getBlogs() {
    const blogs = await this.blogModel.find()
    console.log(blogs);

    return {
      seccess: true,
      message: "Blogs fetched successfully",
      blogs
    }
  }

  async updateBlog(data, id) {
    console.log(id, data);

    const updatedData = await this.blogModel.findOneAndUpdate(id, data, { new: true })
    if (updatedData) {
      return {
        seccess: false,
        message: "Blogs updated successfully",
        updatedData
      }
    }
    else {
      return {
        seccess: true,
        message: "No Blog found"
      }
    }
  }
}
