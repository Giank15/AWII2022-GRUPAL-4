import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import {InjectModel} from "@nestjs/mongoose"
import {Mesero} from "./interface/mesero.interface"
import {CreateMeseroDto} from "./dto/mesero.dto"
@Injectable()
export class MeseroService {

    constructor(@InjectModel("Mesero") private readonly meseroModel:Model<Mesero>){}

  async getMeseros():Promise<Mesero[]>{
   const meseros= await this.meseroModel.find()
   return meseros
   }

   async getMesero(meseroId:string):Promise<Mesero>{
    const mesero=await this.meseroModel.findById(meseroId)
    return mesero
   }


async createMesero(createMeseroDto: CreateMeseroDto): Promise<Mesero>{
const mesero=new this.meseroModel(createMeseroDto)
return await mesero.save()
}


async updateMesero(meseroId:string, createMeseroDto:CreateMeseroDto): Promise<Mesero>{
const updatedMesero=await this.meseroModel.findByIdAndUpdate(meseroId, createMeseroDto,
 {new:true})
return updatedMesero
}


async deleteMesero(meseroId:string){
const deletedMesero= await this.meseroModel.findByIdAndDelete(meseroId)
return deletedMesero
}

}
