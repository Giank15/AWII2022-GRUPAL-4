import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";


@Schema()
export class Deportista {

    @ApiProperty()
    @Prop()
    Nombre: string 

    @ApiProperty()
    @Prop()
    Peso: string

    @ApiProperty()
    @Prop()
    Altura: number

    @ApiProperty()
    @Prop()
    Edad: number
}



export const DeportistaEsquema = SchemaFactory.createForClass( Deportista )