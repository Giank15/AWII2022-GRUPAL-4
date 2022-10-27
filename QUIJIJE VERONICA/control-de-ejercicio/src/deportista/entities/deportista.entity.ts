import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";


@Schema()
export class Deportista {

    @Prop()
    Nombre: string 

    @Prop()
    Peso: string

    @Prop()
    Altura: number

    @Prop()
    Edad: number
}



export const DeportistaEsquema = SchemaFactory.createForClass( Deportista )