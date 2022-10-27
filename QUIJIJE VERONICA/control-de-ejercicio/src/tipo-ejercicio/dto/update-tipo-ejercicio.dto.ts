import { PartialType } from '@nestjs/mapped-types';
import { CreateTipoEjercicioDto } from './create-tipo-ejercicio.dto';

export class UpdateTipoEjercicioDto extends PartialType(CreateTipoEjercicioDto) {}
