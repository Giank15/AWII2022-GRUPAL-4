import { IsNotEmpty, IsString, MinLength } from "class-validator"

export class CreateEjercicioRealizadoDto {

    @IsNotEmpty({message:"La Fecha esta Vacio!"})
    @IsString({message:"La Fecha debe ser una Cadena de Caracteres!"})
    @MinLength(6,{message:"La Fecha debe tener como minimo 6 caracteres!"})
    Fecha: string


    @IsNotEmpty({message:"La Hora esta Vacia!"})
    @IsString({message:"La Hora debe ser una Cadena de Caracteres!"})
    @MinLength(4,{message:"La Hora debe tener como minimo 4 caracteres!"})
    Hora: string


    @IsNotEmpty({message:"El Tipo Transcurrido esta Vacio!"})
    @IsString({message:"El Tipo Transcurridoe debe ser una Cadena de Caracteres!"})
    @MinLength(4,{message:"El Tipo Transcurrido debe tener como minimo 4 caracteres!"})
    TiempoTranscurrido: string


    @IsNotEmpty({message:"Las Calorias Quemadas esta Vacio!"})
    @IsString({message:"Las Calorias Quemadas debe ser una Cadena de Caracteres!"})
    @MinLength(6,{message:"Las Calorias Quemadas debe tener como minimo 6 caracteres!"})
    CaloriasQuemadas: string
}
