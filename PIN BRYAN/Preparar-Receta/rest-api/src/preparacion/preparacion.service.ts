import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from "@nestjs/mongoose";
import { Preparacion } from './interfaces/preparacion.interface';
import { PreparacionDTO } from './dto/preparacion.dto';

@Injectable()
export class PreparacionService {

    constructor(@InjectModel('Preparacion') readonly preparacionModel: Model<Preparacion>){

    }

    async crearPreparacion(preparacionDTO: PreparacionDTO): Promise<Preparacion>{
        
        //SE CREA EL COCINERO
        const preparacion = new this.preparacionModel(preparacionDTO);
        return await preparacion.save()
    }

    async obtenerPreparaciones(): Promise<Preparacion[]>{
        
        //PARA CONSULTAR TODOS LOS IDIOMAS
        const preparaciones = await this.preparacionModel.find().populate('idmesero').populate('idreceta')
        return preparaciones;

    }

    async obtenerPreparacion(preparacionID: string): Promise<Preparacion>{

        //CONSULTA DE UN SOLO COCINERO
        const preparacion = await this.preparacionModel.findById(preparacionID).populate('idmesero').populate('idreceta')
        return preparacion;

    }
    
    async actualizarpreparacion(preparacionID: string, preparacionDTO: PreparacionDTO): Promise<Preparacion>{

        // PARA ACTUALIZAR UN COCINERO, NEW: TRUE NOS PERMITE MOSTRAR LOS CAMBIOS QUE SE HICIERON AL ACTUALIZAR
        const preparacionAct = await this.preparacionModel.findByIdAndUpdate(preparacionID, preparacionDTO, {new: true});
        return preparacionAct;

    }

    async eliminarPreparacion(preparacionID: string): Promise<Preparacion>{

        //PARA ELIMINAR UN IDIOMA
        const preparacionDel = await this.preparacionModel.findByIdAndDelete(preparacionID);
        return preparacionDel;

    }

}
