import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//TODO El SCHEMA de los COCINEROS (Collection)
export type CocineroDocument = Cocinero & Document;

@Schema()
export class Cocinero {
  @Prop()
  name: string;

  @Prop()
  sueldo: number;

  @Prop({unique: true})
  email: string;

  @Prop()
  password: string;

  @Prop()
  role: string;
}

export const CocineroSchema = SchemaFactory.createForClass(Cocinero);