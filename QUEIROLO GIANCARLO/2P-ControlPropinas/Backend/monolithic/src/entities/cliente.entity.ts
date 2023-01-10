import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Cliente {
    @ApiProperty()
    @Prop()
    nombreCliente: String;

    @ApiProperty()
    @Prop()
    cedulaCliente: String;
}

export const esquemaCliente = SchemaFactory.createForClass(Cliente)