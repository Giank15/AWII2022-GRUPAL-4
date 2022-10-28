import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateTipoEjercicioDto } from './dto/create-tipo-ejercicio.dto';
import { UpdateTipoEjercicioDto } from './dto/update-tipo-ejercicio.dto';
import { TipoEjercicio } from './entities/tipo-ejercicio.entity';

@Injectable()
export class TipoEjercicioService {

  constructor(
    @InjectModel( TipoEjercicio.name )
    private readonly TipoEjercicioModel: Model<TipoEjercicio>
  ){}

  async Crear(createTipoEjercicioDto: CreateTipoEjercicioDto) {
    try {

      const Tipoejercicio = await this.TipoEjercicioModel.create( createTipoEjercicioDto )
      return Tipoejercicio;

    } catch (error) {

      throw new InternalServerErrorException('Error en el proceso de creacion _ Problemas Internos')
    
    }
  }

  BuscarTodos() {
    const DatosTipoEjercicio =  this.TipoEjercicioModel.find()
    return DatosTipoEjercicio;
  }

  async BuscarUno(id: string) {
    let MostarTipoEjercicio: TipoEjercicio;

    if(isValidObjectId(id)){
      MostarTipoEjercicio = await this.TipoEjercicioModel.findById(id)
    }

    if( !MostarTipoEjercicio ){
      throw new NotFoundException('El elemento no se encuntra dentro de la Base de Datos')
    }

    return MostarTipoEjercicio;
  }

  async Actualizar(id: string, updateTipoEjercicioDto: UpdateTipoEjercicioDto) {
    try {

      const ActualizarTipoEjercicio = await this.TipoEjercicioModel.findById(id)
      await ActualizarTipoEjercicio.updateOne(updateTipoEjercicioDto)
      return{...updateTipoEjercicioDto}

    } catch (error) {

      throw new NotFoundException('El elemento no se encuntra dentro de la Base de Datos')
    
    }
  }

  async Eliminar(id: string) {
    try {
      const EliminarTipoEjercicio = await this.TipoEjercicioModel.findById(id)
      await EliminarTipoEjercicio.deleteOne()
      return "Se ha eliminado con Exito"
      
    } catch (error) {
      
      throw new NotFoundException('El elemento no se encuntra dentro de la Base de Datos')

    }
  }
}
