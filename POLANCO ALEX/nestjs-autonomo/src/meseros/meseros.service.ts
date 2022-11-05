import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Meseros } from './interfaces/meseros.interface';
import { CreateMeseroDTO } from './dto/meseros.dto';

@Injectable()
export class MeserosService {
    constructor(@InjectModel("Mesero") private readonly meseroModel:Model<Meseros>){}

    async getMeseros():Promise <Meseros[]>{
        const meseros=await this.meseroModel.find()
        return meseros
    }

    /////
    async getMesero(meseroId:number):Promise<Meseros>{
        const meseros= await this.meseroModel.findById(meseroId)
        return meseros
        }
    
    
        async createMesero(createMeserosDTO:CreateMeseroDTO):Promise<Meseros>{
            const meseros=new this.meseroModel(createMeserosDTO)
            return await meseros.save()
        }
    
    
        async deleteMesero(meseroId:number):Promise<Meseros>{
         const deleteMesero= await this.meseroModel.findByIdAndDelete(meseroId)
         return deleteMesero
        }
    
        async updateMesero(meseroId:number, createMeserosDto:CreateMeseroDTO):Promise<Meseros>{
            const updateMesero= await this.meseroModel.findByIdAndUpdate(meseroId, createMeserosDto, {new:true})
            return updateMesero
        }
    
}
