import { Schema } from "mongoose"
//En este apartado estamos haciendo la configuracion de los tipo de datos segun la sintaxis adecuada al modulo de mongoose
export const platoSchema=new Schema({
    id:Number,
    nombreplato:String,
    calidad:String,
    peso:String
})