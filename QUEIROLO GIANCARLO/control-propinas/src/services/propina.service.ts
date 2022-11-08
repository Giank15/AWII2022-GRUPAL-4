import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Propina } from '../entities/propina.entity';
import { validacionPropina } from '../validacion/propinaV';

@Injectable()
export class servicioPropina{
    constructor(
        @InjectModel(Propina.name)
        private readonly modeloPropina: Model<Propina>
    ){}
    
    async Crear(validacionPropina: validacionPropina){
        try{
            const Propina = await this.modeloPropina.create(validacionPropina)
            return Propina;
        } 
        catch(error){
            throw new InternalServerErrorException('Error en el proceso de creacion')
        }
    }

    BuscarTodos(){
        const DatosPropina = this.modeloPropina.find()
        return DatosPropina;
    }

    async BuscarUno(id: string){
        let Mostar: Propina;

        if(isValidObjectId(id)){
            Mostar = await this.modeloPropina.findById(id)
        }

        if(!Mostar){
            throw new NotFoundException('El elemento no se encuentra dentro de la Base de Datos')
        }
        return Mostar;
    }

    async Actualizar(id: string, validacionPropina: validacionPropina){
        try{
            const actualizarPropina = await this.modeloPropina.findById(id)
            await actualizarPropina.updateOne(validacionPropina)
        }
        catch(error){
            throw new NotFoundException('El elemento no se encuentra dentro de la Base de Datos')
        }
    }

    async Eliminar(id: string){
        try{
            const eliminarPropina = await this.modeloPropina.findById(id)
            await eliminarPropina.deleteOne()
            return "Se ha eliminado con exito"
        } 
        catch(error){
            throw new NotFoundException('El elemento no se encuntra dentro de la Base de Datos')
        }
    }
}