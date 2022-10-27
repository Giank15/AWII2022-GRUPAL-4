import { PartialType } from '@nestjs/mapped-types';
import { CreateEjercicioRealizadoDto } from './create-ejercicio-realizado.dto';

export class UpdateEjercicioRealizadoDto extends PartialType(CreateEjercicioRealizadoDto) {}
