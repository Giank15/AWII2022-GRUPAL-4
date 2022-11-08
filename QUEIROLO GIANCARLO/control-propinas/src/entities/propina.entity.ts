import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Cliente } from '../entities/cliente.entity';
import { Mesero } from '../entities/mesero.entity';
import * as mongoose from 'mongoose';

@Schema()
export class Propina {
    @ApiProperty()
    @Prop()
    fechaPropina: String;

    @ApiProperty()
    @Prop()
    horaPropina: String;

    @ApiProperty()
    @Prop()
    valorPropina: String;

    @ApiProperty()
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' })
    idCliente: Cliente;
    
    @ApiProperty()
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Mesero' })
    idMesero: Mesero;
}

export const esquemaPropina = SchemaFactory.createForClass(Propina)