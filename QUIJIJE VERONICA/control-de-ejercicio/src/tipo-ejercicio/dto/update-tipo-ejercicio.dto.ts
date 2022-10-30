import { PartialType } from '@nestjs/swagger';
import { CreateTipoEjercicioDto } from './create-tipo-ejercicio.dto';

export class UpdateTipoEjercicioDto extends PartialType(CreateTipoEjercicioDto) {}
