import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';

import { RegistrationPostEntity } from '../models/post.entity';
import { RegistrationPost } from '../models/post.interface';

@Injectable()
export class RegistrationService {
  // getHello(): string {
  //   return 'Registration Page';
  // }
  constructor(
    @InjectRepository(RegistrationPostEntity)
    private readonly registrationPostRepository: Repository<RegistrationPostEntity>
  ) {}
    async createPost(registrationPost: RegistrationPost) {
      const email_existence = await this.registrationPostRepository.findOne({ where: {emailId: registrationPost.emailId}});
      if(email_existence == undefined){
        return this.registrationPostRepository.save(registrationPost);
      }
      else{
        // const res_message = {
        //   message : "Email Already Exist!!!", 
        //   statusCode: 409
        // };
        return false;
      }
 //----------working-------------        
      // const email_existence = await this.registrationPostRepository.findOne({ where: {emailId: registrationPost.emailId}});
      // if(email_existence == undefined){
      //   return this.registrationPostRepository.save(registrationPost);
      // }
      // else{
      //   const res_message = {
      //     message : "Email Already Exist!!!", 
      //     statusCode: 409
      //   };
      //   return res_message;
      // }
//----------working end-------------      
    }
// createPost( registrationPost: RegistrationPost ): Observable<RegistrationPost> {
//     //createPost( registrationPost: RegistrationPost ) {  
//     // public async getAll() {
//     //   return await this.repo.find();
//     // }
//     console.log("emailll", this.registrationPostRepository.findOne({ where: {emailId: registrationPost.emailId}}).then((data)=>{console.log("cureeent", data)})  );
//     const arraySource = from(this.registrationPostRepository.findOne({ where: {emailId: registrationPost.emailId}}));
// const subscribe = arraySource.subscribe(val => console.log("valuesss", val));
// console.log("valuess22222222222", subscribe);
// return from(this.registrationPostRepository.findOne({ where: {emailId: registrationPost.emailId}}));
//   //return from(this.registrationPostRepository.findOne({ where: {emailId: registrationPost.emailId}}));
// // if(from(this.registrationPostRepository.findOne({ where: {emailId: registrationPost.emailId}}))){
// //   console.log("Not added", from(this.registrationPostRepository.findOne({ where: {emailId: registrationPost.emailId}}))   ); 
// // }
// // else{
// //   console.log("added"); 
// //   return from(this.registrationPostRepository.save(registrationPost));
// // }
//   //return from(this.registrationPostRepository.findOne({ where: {emailId: registrationPost.emailId}}));
//     //console.log("dataaaaaa", this.registrationPostRepository.find(registrationPost[0]));
//     //console.log("dataaaaaa", registrationPost.emailId);
// //return from(this.registrationPostRepository.save(registrationPost));
//     //return this.registrationPostRepository.update(registrationPost);
//     //return this.registrationPostRepository.find(registrationPost);

//   }

}
