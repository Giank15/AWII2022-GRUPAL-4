import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";

export class validacionMesero {
    @ApiProperty()
    @IsNotEmpty({message:"El atributo esta Vacio!"})
    @IsString({message:"El atributo debe ser una Cadena de Caracteres!"})
    @MinLength(10,{message:"El atributo debe tener como minimo 5 caracteres!"})
    nombreMesero: string;

    @ApiProperty()
    @IsNotEmpty({message:"El atributo esta Vacio!"})
    @IsString({message:"El atributo debe ser una Cadena de Caracteres!"})
    @MinLength(10,{message:"El atributo debe tener como minimo 5 caracteres!"})
    cedulaMesero: string;
}