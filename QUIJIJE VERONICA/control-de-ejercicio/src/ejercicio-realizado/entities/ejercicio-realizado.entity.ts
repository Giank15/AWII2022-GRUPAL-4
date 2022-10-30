import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class EjercicioRealizado {

    @ApiProperty()
    @Prop()
    Fecha: string


    @ApiProperty()
    @Prop()
    Hora: string


    @ApiProperty()
    @Prop()
    TiempoTranscurrido: string

    
    @ApiProperty()
    @Prop()
    CaloriasQuemadas: string
}


export const EjercicioRealizadoEsquema = SchemaFactory.createForClass( EjercicioRealizado )