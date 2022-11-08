import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, Min, MinLength} from "class-validator";

export class validacionPedido{
    @ApiProperty()
    @IsNotEmpty({message:
    "El atributo esta Vacio!"})
    @IsNumber({message:
    "El atributo a ingresar debe ser un numero !"})
    @MinLength(1,{message:"El numero debe tener minimo 1 caracter!"})
    mesa: number;

    //
    @ApiProperty()
    @IsNotEmpty({message:
    "El atributo esta Vacio!"})
    @IsNumber({message:
        "El atributo a ingresar debe ser un numero !"})
    @MinLength(1,{message:"El atributo debe tener minimo 1 caracteres!"})
    cantidad: number;

    //
    @ApiProperty()
    @IsNotEmpty({message:
    "El atributo esta Vacio!"})
    @IsNumber({message:
        "El atributo a ingresar debe ser un numero !"})
    @MinLength(1,{message:"El atributo debe tener minimo 1 caracteres!"})
    precio: number;
}