import { Body, Controller, Get, Param, Post, Put, Req, Res, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { CreateBlogDto } from './dto/create-blog.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { UserService } from './user.service';

@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post("signup")
  @UseInterceptors(FileInterceptor('file'))
  async userSignup(@Res() res, @Body() data: CreateUserDto) {
    const newUser = await this.userService.signUpUser(data)
    return res.status(201).json(newUser)
   
  }

  @Post("createBlog")
  async createBlogs(@Res() res,@Body() createBlogDto:CreateBlogDto) {
    const createdBlog = await this.userService.createBlog(createBlogDto)

    return res.status(201).json(createdBlog)
  }

  @Get("blogs")
  async getAllBlogs(@Res() res){
    const allBlogs = await this.userService.getBlogs()
    return res.status(200).json(allBlogs)
  }

  @Put("updateBlog/:authorId")
  async updateBlogs(@Res() res,@Body() dataToUpdate:UpdateBlogDto,@Param() authorid){
    console.log(authorid);
    
    const updatedBlog = await this.userService.updateBlog(dataToUpdate,authorid)
    return res.status(200).json(updatedBlog)
  }
}
