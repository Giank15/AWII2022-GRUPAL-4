import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class TipoEjercicio {


    @Prop()
    TipoDeEjercicio: String

}


export const TipoEjercicioEsquema = SchemaFactory.createForClass( TipoEjercicio )