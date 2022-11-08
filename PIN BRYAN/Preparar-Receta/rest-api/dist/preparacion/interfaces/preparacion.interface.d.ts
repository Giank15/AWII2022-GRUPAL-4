import { Document } from "mongoose";
export interface Preparacion extends Document {
    readonly fecha: Date;
    readonly hora: Date;
    readonly cantidad: number;
    readonly costo: number;
    readonly tiempo: string;
    readonly idmesero: string;
    readonly idreceta: string;
}
