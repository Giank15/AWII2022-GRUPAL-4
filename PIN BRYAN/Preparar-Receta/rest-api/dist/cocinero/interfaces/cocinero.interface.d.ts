import { Document } from "mongoose";
export interface Cocinero extends Document {
    readonly nombre: string;
    readonly sueldo: number;
    readonly createdAt: Date;
}
