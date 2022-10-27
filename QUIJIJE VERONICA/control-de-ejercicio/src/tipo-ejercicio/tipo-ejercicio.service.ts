import { Injectable } from '@nestjs/common';
import { CreateTipoEjercicioDto } from './dto/create-tipo-ejercicio.dto';
import { UpdateTipoEjercicioDto } from './dto/update-tipo-ejercicio.dto';

@Injectable()
export class TipoEjercicioService {
  create(createTipoEjercicioDto: CreateTipoEjercicioDto) {
    return 'This action adds a new tipoEjercicio';
  }

  findAll() {
    return `This action returns all tipoEjercicio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoEjercicio`;
  }

  update(id: number, updateTipoEjercicioDto: UpdateTipoEjercicioDto) {
    return `This action updates a #${id} tipoEjercicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoEjercicio`;
  }
}
