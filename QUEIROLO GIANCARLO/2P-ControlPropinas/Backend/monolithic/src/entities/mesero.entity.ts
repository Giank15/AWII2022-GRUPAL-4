import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Mesero {
    @ApiProperty()
    @Prop()
    nombreMesero: String;

    @ApiProperty()
    @Prop()
    cedulaMesero: String;
}

export const esquemaMesero = SchemaFactory.createForClass(Mesero)