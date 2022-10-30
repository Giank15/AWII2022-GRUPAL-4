import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsPositive, IsString, Min, MinLength } from "class-validator";

export class CreateDeportistaDto {


    @ApiProperty()
    @IsNotEmpty({message:"El Nombre esta Vacio!"})
    @IsString({message:"El Nombre debe ser una Cadena de Caracteres!"})
    @MinLength(5,{message:"El Nombre debe tener como minimo 5 caracteres!"})
    Nombre: string;

    @ApiProperty()
    @IsNotEmpty({message:"El Peso esta Vacio!"})
    @IsString({message:"El Peso debe ser una Cadena de Caracteres!"})
    @MinLength(2, {message:"El Peso debe tener como minimo 2 caracteres!"})
    Peso: string;

    @ApiProperty()
    @IsPositive({message: "La altura debe ser un numero positivo!"})
    @IsNotEmpty({message:"La Altura esta Vacio!"})
    @IsNumber()
    @Min(2, {message:"La Altura debe tener como minimo 2 Numeros"})
    Altura: number;


    @ApiProperty()
    @IsPositive({message: "La Edad debe ser un numero positivo!"})
    @IsNotEmpty({message:"La Edad esta Vacio!"})
    @IsNumber()
    @Min(2, {message:"La Edad debe tener como minimo 2 Numeros"})
    Edad:number;
}
