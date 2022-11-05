import { Document } from "mongoose";
export interface Meseros extends Document {
    readonly id: number;
    readonly Nombre: string;
    readonly CI: number;
    readonly SueldoBasico: number;
    readonly Nivel: string;
}
