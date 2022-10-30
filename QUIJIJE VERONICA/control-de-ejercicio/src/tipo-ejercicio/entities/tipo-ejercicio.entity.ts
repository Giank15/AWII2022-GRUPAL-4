import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class TipoEjercicio {

    @ApiProperty()
    @Prop()
    TipoDeEjercicio: String

}


export const TipoEjercicioEsquema = SchemaFactory.createForClass( TipoEjercicio )