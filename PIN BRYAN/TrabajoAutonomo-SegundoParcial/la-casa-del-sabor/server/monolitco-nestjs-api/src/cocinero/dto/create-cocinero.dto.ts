import { IsEmail, IsMongoId, IsNotEmpty, IsNumber, MaxLength, MinLength  } from "class-validator";

export class CreateCocineroDto {

    @IsNotEmpty()
    name: string;

    @IsNotEmpty()
    @IsNumber()
    sueldo: number;

    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;

    @IsNotEmpty()
    role: string;

}
