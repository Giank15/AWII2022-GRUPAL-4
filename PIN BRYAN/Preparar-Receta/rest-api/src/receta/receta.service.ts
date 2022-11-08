import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { Receta } from './interfaces/receta.interface';
import { RecetaDTO } from './dto/receta.dto';

@Injectable()
export class RecetaService {
    constructor(@InjectModel('Receta') readonly recetaModel: Model<Receta>){

    }

    async crearReceta(recetaDTO: RecetaDTO): Promise<Receta>{
        
        //SE CREA LA RECETA
        const receta = new this.recetaModel(recetaDTO);
        return await receta.save()
    }

    async obtenerRecetas(): Promise<Receta[]>{
        
        //PARA CONSULTAR TODAS LAS RECETAS
        const receta = await this.recetaModel.find()
        return receta;

    }

    async obtenerReceta(recetaID: string): Promise<Receta>{

        //CONSULTA DE UNA SOLA RECETA
        const receta = await this.recetaModel.findById(recetaID);
        return receta;

    }
    
    async actualizarReceta(recetaID: string, recetaDTO: RecetaDTO): Promise<Receta>{

        // PARA ACTUALIZAR UNA RECETA, NEW: TRUE NOS PERMITE MOSTRAR LOS CAMBIOS QUE SE HICIERON AL ACTUALIZAR
        const recetaAct = await this.recetaModel.findByIdAndUpdate(recetaID, recetaDTO, {new: true});
        return recetaAct;

    }

    async eliminarReceta(recetaID: string): Promise<Receta>{

        //PARA ELIMINAR UNA RECETA
        const recetaDel = await this.recetaModel.findByIdAndDelete(recetaID);
        return recetaDel;

    }
}
