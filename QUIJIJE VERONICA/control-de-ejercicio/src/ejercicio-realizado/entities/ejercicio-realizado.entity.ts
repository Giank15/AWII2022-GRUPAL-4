import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class EjercicioRealizado {

    @Prop()
    Fecha: string

    @Prop()
    Hora: string

    @Prop()
    TiempoTranscurrido: string

    @Prop()
    CaloriasQuemadas: number
}


export const EjercicioRealizadoEsquema = SchemaFactory.createForClass( EjercicioRealizado )