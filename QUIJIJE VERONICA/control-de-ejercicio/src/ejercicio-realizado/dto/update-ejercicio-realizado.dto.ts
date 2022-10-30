import { PartialType } from '@nestjs/swagger';
import { CreateEjercicioRealizadoDto } from './create-ejercicio-realizado.dto';

export class UpdateEjercicioRealizadoDto extends PartialType(CreateEjercicioRealizadoDto) {}
