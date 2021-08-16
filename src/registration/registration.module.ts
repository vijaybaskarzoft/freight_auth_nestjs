import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegistrationController } from './controllers/registration.controller';
import { RegistrationPostEntity } from './models/post.entity';
import { RegistrationService } from './services/registration.service';

@Module({
  imports: [TypeOrmModule.forFeature([RegistrationPostEntity])],
  controllers: [RegistrationController],
  providers: [RegistrationService]
})
export class RegistrationModule {}

