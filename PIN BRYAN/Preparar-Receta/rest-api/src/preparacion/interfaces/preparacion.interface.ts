import { Document } from "mongoose";

//HEREDAMOS DESDE UN OBJETO DESDE MONGOOSE SUS PROPIEDADES PARA AÑADIRLAS A ESTAS QUE ESTAN CREADAS

export interface Preparacion extends Document {

    readonly fecha: Date;
    readonly hora: Date;
    readonly cantidad: number;
    readonly costo: number;
    readonly tiempo: string;    
    readonly idmesero: string;
    readonly idreceta: string;

}