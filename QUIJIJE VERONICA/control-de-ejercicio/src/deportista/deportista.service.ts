import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';
import { Deportista } from './entities/deportista.entity';

@Injectable()
export class DeportistaService {

  constructor(
    @InjectModel( Deportista.name )
    private readonly DeportistaModel: Model<Deportista>
  ){}

  async Crear(createDeportistaDto: CreateDeportistaDto) {
    try {

      const Deportista = await this.DeportistaModel.create( createDeportistaDto )
      return Deportista;

    } catch (error) {

      throw new InternalServerErrorException('Error en el proceso de creacion _ Problemas Internos')
    
    }
  }

  BuscarTodos() {
    
    const DatosDeportista =  this.DeportistaModel.find()
    return DatosDeportista;
  }


  async BuscarUno(id: string) {
    let MostarDeportista: Deportista;

    if(isValidObjectId(id)){
      MostarDeportista = await this.DeportistaModel.findById(id)
    }

    if( !MostarDeportista ){
      throw new NotFoundException('El elemento no se encuntra dentro de la Base de Datos')
    }

    return MostarDeportista;

  }

  async Actualizar(id: string, updateDeportistaDto: UpdateDeportistaDto) {
    try {

      const ActualizarDeportista = await this.DeportistaModel.findById(id)
      await ActualizarDeportista.updateOne(updateDeportistaDto)
      return{...updateDeportistaDto}

    } catch (error) {

      throw new NotFoundException('El elemento no se encuntra dentro de la Base de Datos')
    
    }
  }

  async Eliminar(id: string) {
    try {
      const EliminarDeportista = await this.DeportistaModel.findById(id)
      await EliminarDeportista.deleteOne()
      return "Se ha eliminado con Exito"
      
    } catch (error) {
      
      throw new NotFoundException('El elemento no se encuntra dentro de la Base de Datos')

    }
  }
}
