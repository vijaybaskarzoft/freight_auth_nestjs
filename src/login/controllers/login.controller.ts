import { Controller, Get, Post, Body } from '@nestjs/common';
//import { AppService } from './app.service';
import { CreatePostDto } from './create-post.dto';

@Controller()
export class LoginController {
  //constructor(private readonly appService: AppService) {}

  @Get('/login')
  async getHello(): Promise<string> {
    return "Login Page";
  }

  @Post('/login')
  create(@Body() createPostDto: CreatePostDto){
      console.log("Login Data comming from Client Side", createPostDto);
      return createPostDto;
  }
}
