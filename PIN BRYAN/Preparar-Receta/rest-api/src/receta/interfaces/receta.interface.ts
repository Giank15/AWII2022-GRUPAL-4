import { Document } from "mongoose";

//HEREDAMOS DESDE UN OBJETO DESDE MONGOOSE SUS PROPIEDADES PARA AÑADIRLAS A ESTAS QUE ESTAN CREADAS

export interface Receta extends Document {

    readonly nombre: string;
    readonly ingredientesCant: string;
    readonly createdAt: Date;

}