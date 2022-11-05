import { Document } from "mongoose";
export interface Platos extends Document {
    readonly id: number;
    readonly nombreplato: string;
    readonly calidad: string;
    readonly peso: string;
}
