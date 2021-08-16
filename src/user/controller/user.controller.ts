import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { UserI } from "../models/user.interface";
import { UserService } from '../service/user.service';
import { RegisterUserDto } from "../models/dto/RegisterUser.dto";
import { LoginUserDto } from "../models/dto/LoginUser.dto";
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


@Controller('users')
export class UserController {

    constructor(private userService: UserService) {}

    @Post('register')
    create(@Body() registerUserDto: RegisterUserDto): Observable<UserI> {
        return this.userService.register(registerUserDto);
    }

    @Post('login')
    @HttpCode(200)
    login(@Body() loginUserDto: LoginUserDto): Observable<Object> {
        return this.userService.login(loginUserDto).pipe(
            map((jwt: string) => {
                return {
                    access_token: jwt,
                    token_type: 'JWT',
                    expires_in: 10000
                }
            })
        );
    }

    // @UseGuards(JwtAuthGuard)
    // @Get()
    // findAll(@Req() request): Observable<UserI[]> {
    //     return this.userService.findAll();
    // }
}