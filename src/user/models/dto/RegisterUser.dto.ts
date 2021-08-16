import { IsString } from "class-validator";
import { LoginUserDto } from "./LoginUser.dto";

export class RegisterUserDto extends LoginUserDto{

    @IsString()
    carrier_name: string;

}