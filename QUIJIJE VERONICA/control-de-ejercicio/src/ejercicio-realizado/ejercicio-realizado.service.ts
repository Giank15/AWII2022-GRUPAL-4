import { Injectable } from '@nestjs/common';
import { CreateEjercicioRealizadoDto } from './dto/create-ejercicio-realizado.dto';
import { UpdateEjercicioRealizadoDto } from './dto/update-ejercicio-realizado.dto';

@Injectable()
export class EjercicioRealizadoService {
  create(createEjercicioRealizadoDto: CreateEjercicioRealizadoDto) {
    return 'This action adds a new ejercicioRealizado';
  }

  findAll() {
    return `This action returns all ejercicioRealizado`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ejercicioRealizado`;
  }

  update(id: number, updateEjercicioRealizadoDto: UpdateEjercicioRealizadoDto) {
    return `This action updates a #${id} ejercicioRealizado`;
  }

  remove(id: number) {
    return `This action removes a #${id} ejercicioRealizado`;
  }
}
