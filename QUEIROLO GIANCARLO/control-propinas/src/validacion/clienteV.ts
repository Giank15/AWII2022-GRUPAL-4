import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";

export class validacionCliente{
    @ApiProperty()
    @IsNotEmpty({message:"El atributo esta Vacio!"})
    @IsString({message:"El atributo debe ser una Cadena de Caracteres!"})
    @MinLength(10,{message:"El atributo debe tener como minimo 10 caracteres!"})
    nombreCliente: string;

    @ApiProperty()
    @IsNotEmpty({message:"El atributo esta Vacio!"})
    @IsString({message:"El atributo debe ser una Cadena de Caracteres!"})
    @MinLength(10,{message:"El atributo debe tener como minimo 10 caracteres!"})
    cedulaCliente: string;
}