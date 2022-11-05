//Importamos los modulos y librerias necesarias para el desarrollo de los servicios en donde validaremos los apartados creados con anterioridad

import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Platos } from './interfaces/platos.interface';
import { Mode } from 'fs';
import { CreatePlatoDTO } from './dto/platos.dto';


//En este apartado validaremos los apartados relacionados con platos.controller, los llamados controladores por cada uno de los métodos usados 
@Injectable()
export class PlatosService {
    constructor(@InjectModel("Plato") private readonly platoModel:Model<Platos>){}

    async getPlatos():Promise <Platos[]>{
        const platos=await this.platoModel.find()
        return platos
    }

    async getPlato(platoId:number):Promise<Platos>{
        const platos= await this.platoModel.findById(platoId)
        return platos
        }
    
    
        async createPlato(createPlatosDto:CreatePlatoDTO):Promise<Platos>{
            const platos=new this.platoModel(createPlatosDto)
            return await platos.save()
        }
    
    
        async deletePlato(platoId:number){
         const deletePlato= await this.platoModel.findByIdAndDelete(platoId)
         return deletePlato
        }
    
        async updatePlato(platoId:number, createPlatosDto:CreatePlatoDTO):Promise<Platos>{
            const updatedPlato= await this.platoModel.findByIdAndUpdate(platoId, createPlatosDto, {new:true})
            return updatedPlato
        }
    
}

//Nota: La lógica en cuanto a código es la misma para cada una de las entidades, las diviciones son claras por ende el autor limita el comentario
//a una sola entidad para así mantener una simplesa del código