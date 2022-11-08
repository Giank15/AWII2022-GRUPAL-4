import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Min, MinLength} from "class-validator";

export class validacionPlatos{
    @ApiProperty()
    @IsNotEmpty({message:
    "El atributo esta Vacio!"})
    @IsString({message:
    "El atributo debe ser una cadena de caracteres!"})
    @MinLength(8,{message:"El atributo debe tener minimo 5 caracteres!"})
    nombreplato: string;

    //
    @ApiProperty()
    @IsNotEmpty({message:
    "El atributo esta Vacio!"})
    @IsString({message:
    "El atributo debe ser una cadena de caracteres!"})
    @MinLength(4,{message:"El atributo debe tener minimo 4 caracteres!"})
    calidad: string;
}