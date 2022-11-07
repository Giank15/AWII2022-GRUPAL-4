import { Document } from "mongoose";
export interface Receta extends Document {
    readonly nombre: string;
    readonly ingredientesCant: string;
    readonly createdAt: Date;
}
