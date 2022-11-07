import { Document } from "mongoose";

//HEREDAMOS DESDE UN OBJETO DESDE MONGOOSE SUS PROPIEDADES PARA AÑADIRLAS A ESTAS QUE ESTAN CREADAS

export interface Cocinero extends Document {

    readonly nombre: string;
    readonly sueldo: number;
    readonly createdAt: Date;

}