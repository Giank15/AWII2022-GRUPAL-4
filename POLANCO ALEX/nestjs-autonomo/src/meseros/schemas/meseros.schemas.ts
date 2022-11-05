import { Schema } from "mongoose";
export const meserosSchema=new Schema({
    id:Number,
    Nombre:String,
    CI:Number,
    SueldoBasico: Number,
    Nivel:String
})