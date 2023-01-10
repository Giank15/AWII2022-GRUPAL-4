import { Injectable } from '@nestjs/common';
import {Model} from "mongoose"
import {InjectModel} from "@nestjs/mongoose"
import {Plato} from "./interface/plato.interface"
import {CreatePlatoDto} from "./dto/plato.dto"
@Injectable()
export class PlatoService {
   

  constructor(@InjectModel("Plato") private readonly platoModel:Model<Plato>){}

  async getPlatos():Promise<Plato[]>{
   const platos= await this.platoModel.find()
   return platos
   }

   async getPlato(platoId:string):Promise<Plato>{
    const plato=await this.platoModel.findById(platoId)
    return plato
   }


async createPlato(createPlatoDto:CreatePlatoDto):Promise<Plato>{
const plato= new this.platoModel(createPlatoDto)
return await plato.save()
}

async updatePlato(platoId:string, createPlatoDto:CreatePlatoDto):Promise<Plato>{
const updatedPlato= await this.platoModel.findByIdAndUpdate(platoId, createPlatoDto, {new:true})
return updatedPlato
}


async deletePlato(platoId:string):Promise<Plato>{
const deletedPlato= await this.platoModel.findByIdAndDelete(platoId)
return deletedPlato
}

}
