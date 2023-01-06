import { IsEmail, IsNotEmpty, IsNumber, MaxLength, MinLength  } from "class-validator";

export class LoginAuthDto{

    @IsNotEmpty()
    @IsEmail()
    email: string

    @MinLength(4)
    @MaxLength(12)
    password: string

}