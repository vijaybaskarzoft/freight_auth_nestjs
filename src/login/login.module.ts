import { Module } from '@nestjs/common';
import { LoginController } from './controllers/login.controller';
//import { AppService } from './app.service';

@Module({
  //imports: [],
  controllers: [LoginController]
  //providers: [AppService],
})
export class LoginModule {}

