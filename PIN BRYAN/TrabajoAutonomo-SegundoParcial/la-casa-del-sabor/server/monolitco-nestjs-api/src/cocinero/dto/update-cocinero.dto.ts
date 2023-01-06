import { PartialType } from '@nestjs/mapped-types';
import { CreateCocineroDto } from './create-cocinero.dto';

export class UpdateCocineroDto extends PartialType(CreateCocineroDto) {}
