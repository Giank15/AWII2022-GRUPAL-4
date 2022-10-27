import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class TipoEjercicio {


    @Prop({
        index: true
    })
    TipoDeEjercicio: String

}


export const TipoEjercicioEsquema = SchemaFactory.createForClass( TipoEjercicio )