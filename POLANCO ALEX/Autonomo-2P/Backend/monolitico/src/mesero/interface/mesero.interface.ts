import { Document } from "mongoose"
export interface Mesero extends Document{
  readonly  nombre:string
  readonly cedula:string
   readonly sueldobasico:string
   readonly nivel:string
}