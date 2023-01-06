import { PartialType } from '@nestjs/mapped-types';
import { CreatePreparacionDto } from './create-preparacion.dto';

export class UpdatePreparacionDto extends PartialType(CreatePreparacionDto) {}
