import {IsString, MaxLength, MinLength} from "class-validator"


export class CreateMeseroDto{

   /*validamos que se ingrese un valor de tipo string y que sea minimo de 5 caracteres*/
   @IsString()
   @MinLength(5)
   @MaxLength(25)
   readonly nombre:string
   readonly cedula:string
   readonly sueldobasico:string
   readonly nivel:string
}


