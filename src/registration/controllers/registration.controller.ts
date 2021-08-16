import { Body, Controller, Get, HttpException, HttpStatus, Post, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Response } from 'express';
import { RegistrationPost } from '../models/post.interface';
import { RegistrationService } from '../services/registration.service';

@Controller()
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Get('/registration')
  async getHello(): Promise<string> {
    return "Registration Page";
  }

  @Post('/registration')
    @UsePipes(new ValidationPipe())
    async create(@Body() post: RegistrationPost, @Res() res: Response){
        const email_exists = await this.registrationService.createPost(post);
        if(email_exists){
            //res.status(HttpStatus.CREATED).send(email_exists);
            res.status(HttpStatus.CREATED).send(
              {
                "message": "Successfully Registered!!!",
                "id": `User Id: ${email_exists.id}`,
              }
            );
        }else{
            throw new HttpException({
                status: HttpStatus.CONFLICT,
                error: `EMAIL: ${post.emailId} IS ALREADY EXIST!!!`,
              }, HttpStatus.CONFLICT);
           }
    }

  //---------working-------
  // @Post('/registration')
  //      //createPost(@Body() post: RegistrationPost): Observable<RegistrationPost> {
  // //create(@Body() post: RegistrationPost): Observable<RegistrationPost> {  
  // create(@Body() post: RegistrationPost){    
  //   console.log("Data of RegistrationPost", post);
  //   return this.registrationService.createPost(post);
  //   //console.log("returning", return this.registrationService.createPost(post));
  // }
  //---------working end-------
}
