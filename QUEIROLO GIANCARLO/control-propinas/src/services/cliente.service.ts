import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Cliente } from '../entities/cliente.entity';
import { validacionCliente } from '../validacion/clienteV';

@Injectable()
export class servicioCliente {
    constructor(
        @InjectModel(Cliente.name)
        private readonly modeloCliente: Model<Cliente>
    ){}
    
    async Crear(validacionCliente: validacionCliente){
        try{
            const Cliente = await this.modeloCliente.create(validacionCliente)
            return Cliente;
        } 
        catch(error){
            throw new InternalServerErrorException('Error en el proceso de creacion')
        }
    }

    BuscarTodos(){
        const DatosCliente = this.modeloCliente.find()
        return DatosCliente;
    }

    async BuscarUno(id: string){
        let Mostar: Cliente;

        if(isValidObjectId(id)){
            Mostar = await this.modeloCliente.findById(id)
        }

        if(!Mostar){
            throw new NotFoundException('El elemento no se encuentra dentro de la Base de Datos')
        }
        return Mostar;
    }

    async Actualizar(id: string, validacionCliente: validacionCliente){
        try{
            const actualizarCliente = await this.modeloCliente.findById(id)
            await actualizarCliente.updateOne(validacionCliente)
        }
        catch(error){
            throw new NotFoundException('El elemento no se encuentra dentro de la Base de Datos')
        }
    }

    async Eliminar(id: string){
        try{
            const eliminarCliente = await this.modeloCliente.findById(id)
            await eliminarCliente.deleteOne()
            return "Se ha eliminado con Exito"
        } 
        catch(error){
            throw new NotFoundException('El elemento no se encuntra dentro de la Base de Datos')
        }
    }
}