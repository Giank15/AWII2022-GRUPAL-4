import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { Cliente } from '../entities/cliente.entity';
import { Mesero } from '../entities/mesero.entity';

export class validacionPropina{
    @ApiProperty()
    @IsNotEmpty({message:"El atributo esta Vacio!"})
    @IsString({message:"El atributo debe ser una Cadena de Caracteres!"})
    fechaPropina: string;

    @ApiProperty()
    @IsNotEmpty({message:"El atributo esta Vacio!"})
    @IsString({message:"El atributo debe ser una Cadena de Caracteres!"})
    horaPropina: string;

    @ApiProperty()
    @IsNotEmpty({message:"El atributo esta Vacio!"})
    @IsString({message:"El atributo debe ser una Cadena de Caracteres!"})
    valorPropina: string;

    @ApiProperty()
    @IsNotEmpty({message:"El atributo esta Vacio!"})
    idCliente: Cliente;

    @ApiProperty()
    @IsNotEmpty({message:"El atributo esta Vacio!"})
    idMesero: Mesero;
}