import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { CreateEjercicioRealizadoDto } from './dto/create-ejercicio-realizado.dto';
import { UpdateEjercicioRealizadoDto } from './dto/update-ejercicio-realizado.dto';
import { EjercicioRealizado } from './entities/ejercicio-realizado.entity';

@Injectable()
export class EjercicioRealizadoService {

  constructor(
    @InjectModel( EjercicioRealizado.name )
    private readonly EjercicioRealiadoModel: Model<EjercicioRealizado>
  ){}
  
  async Crear(createEjercicioRealizadoDto: CreateEjercicioRealizadoDto) {
    try {

      const Ejercicorealizado = await this.EjercicioRealiadoModel.create( createEjercicioRealizadoDto )
      return Ejercicorealizado;

    } catch (error) {

      throw new InternalServerErrorException('Error en el proceso de creacion _ Problemas Internos')
    
    }
  }

  BuscarTodos() {
    const DatosDeportista =  this.EjercicioRealiadoModel.find()
    return DatosDeportista;
  }

  async BuscarUno(id: string) {
    let MostarEjercicioRealizado: EjercicioRealizado;

    if(isValidObjectId(id)){
      MostarEjercicioRealizado = await this.EjercicioRealiadoModel.findById(id)
    }

    if( !MostarEjercicioRealizado ){
      throw new NotFoundException('El elemento no se encuntra dentro de la Base de Datos')
    }

    return MostarEjercicioRealizado;
  }

  async Actualizar(id: string, updateEjercicioRealizadoDto: UpdateEjercicioRealizadoDto) {
    try {

      const ActualizarEjercicio = await this.EjercicioRealiadoModel.findById(id)
      await ActualizarEjercicio.updateOne(updateEjercicioRealizadoDto)
      return{...updateEjercicioRealizadoDto}

    } catch (error) {

      throw new NotFoundException('El elemento no se encuntra dentro de la Base de Datos')
    
    }
  }

  async Eliminar(id: string) {
    try {
      const EliminarEjercicio = await this.EjercicioRealiadoModel.findById(id)
      await EliminarEjercicio.deleteOne()
      return "Se ha eliminado con Exito"
      
    } catch (error) {
      
      throw new NotFoundException('El elemento no se encuntra dentro de la Base de Datos')

    }
  }
}
