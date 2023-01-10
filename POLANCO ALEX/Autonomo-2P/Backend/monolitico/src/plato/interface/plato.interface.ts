import { Document } from "mongoose"
export interface  Plato extends Document{
   readonly nombreplato:string
   readonly  calidad:string
   readonly peso:string
}