import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateTipoEjercicioDto {

    @ApiProperty()
    @IsNotEmpty({message:"El Tipo de Ejercicio esta Vacio!"})
    @IsString({message:"El Tipo de Ejercicio  debe ser una Cadena de Caracteres!"})
    @MinLength(4,{message:"El Tipo de Ejercicio debe tener como minimo 4 caracteres!"})
    TipoDeEjercicio: string;

    
}
