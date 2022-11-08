import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Min, MinLength} from "class-validator";

export class validacionMesero{
    @ApiProperty()
    @IsNotEmpty({message:
    "El atributo esta Vacio!"})
    @IsString({message:
    "El atributo debe ser una cadena de caracteres!"})
    @MinLength(5,{message:"El atributo debe tener minimo 5 caracteres!"})
    Nombre: string;

    //
    @ApiProperty()
    @IsNotEmpty({message:
    "El atributo esta Vacio!"})
    @IsNumber({message:
        "El atributo a ingresar debe ser un numero !"})
    @MinLength(10,{message:"El atributo debe tener minimo 10 caracteres!"})
    CI: number;
}