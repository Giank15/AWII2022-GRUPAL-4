import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { Cocinero } from './interfaces/cocinero.interface';
import { CocineroDTO } from './dto/cocinero.dto';

@Injectable()
export class CocineroService {
    constructor(@InjectModel('Cocinero') readonly cocineroModel: Model<Cocinero>){

    }

    async crearCocinero(cocineroDTO: CocineroDTO): Promise<Cocinero>{
        
        //SE CREA EL COCINERO
        const cocinero = new this.cocineroModel(cocineroDTO);
        return await cocinero.save()
    }

    async obtenerCocineros(): Promise<Cocinero[]>{
        
        //PARA CONSULTAR TODOS LOS IDIOMAS
        const cocineros = await this.cocineroModel.find()
        return cocineros;

    }

    async obtenerCocinero(cocineroID: string): Promise<Cocinero>{

        //CONSULTA DE UN SOLO COCINERO
        const cocinero = await this.cocineroModel.findById(cocineroID);
        return cocinero;

    }
    
    async actualizarCocinero(cocineroID: string, cocineroDTO: CocineroDTO): Promise<Cocinero>{

        // PARA ACTUALIZAR UN COCINERO, NEW: TRUE NOS PERMITE MOSTRAR LOS CAMBIOS QUE SE HICIERON AL ACTUALIZAR
        const cocineroAct = await this.cocineroModel.findByIdAndUpdate(cocineroID, cocineroDTO, {new: true});
        return cocineroAct;

    }

    async eliminarCocinero(cocineroID: string): Promise<Cocinero>{

        //PARA ELIMINAR UN IDIOMA
        const cocineroDel = await this.cocineroModel.findByIdAndDelete(cocineroID);
        return cocineroDel;

    }

}
