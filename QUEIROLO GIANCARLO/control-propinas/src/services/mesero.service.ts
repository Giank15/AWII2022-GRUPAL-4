import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Mesero } from '../entities/mesero.entity';
import { validacionMesero } from '../validacion/meseroV';

@Injectable()
export class servicioMesero {
    constructor(
        @InjectModel(Mesero.name)
        private readonly modeloMesero: Model<Mesero>
    ){}
    
    async Crear(validacionMesero: validacionMesero){
        try {
            const Mesero = await this.modeloMesero.create(validacionMesero)
            return Mesero;
        } 
        catch(error){
            throw new InternalServerErrorException('Error en el proceso de creacion')
        }
    }

    BuscarTodos() {
        const datosMesero = this.modeloMesero.find()
        return datosMesero;
    }

    async BuscarUno(id: string){
        let Mostar: Mesero;

        if(isValidObjectId(id)){
            Mostar = await this.modeloMesero.findById(id)
        }

        if(!Mostar){
            throw new NotFoundException('El elemento no se encuentra dentro de la Base de Datos')
        }
        return Mostar;
    }

    async Actualizar(id: string, validacionMesero: validacionMesero){
        try{
            const actualizarMesero = await this.modeloMesero.findById(id)
            await actualizarMesero.updateOne(validacionMesero)
        }
        catch(error){
            throw new NotFoundException('El elemento no se encuentra dentro de la Base de Datos')
        }
    }

    async Eliminar(id: string){
        try{
            const eliminarMesero = await this.modeloMesero.findById(id)
            await eliminarMesero.deleteOne()
            return "Se ha eliminado con Exito"
        } 
        catch(error){
            throw new NotFoundException('El elemento no se encuntra dentro de la Base de Datos')
        }
    }
}