import { PartialType } from '@nestjs/swagger';
import { CreateDeportistaDto } from './create-deportista.dto';

export class UpdateDeportistaDto extends PartialType(CreateDeportistaDto) {}
