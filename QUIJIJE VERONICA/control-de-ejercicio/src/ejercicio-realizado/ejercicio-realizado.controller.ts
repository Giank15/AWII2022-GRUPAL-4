import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EjercicioRealizadoService } from './ejercicio-realizado.service';
import { CreateEjercicioRealizadoDto } from './dto/create-ejercicio-realizado.dto';
import { UpdateEjercicioRealizadoDto } from './dto/update-ejercicio-realizado.dto';

@Controller('ejercicio-realizado')
export class EjercicioRealizadoController {
  constructor(private readonly ejercicioRealizadoService: EjercicioRealizadoService) {}

  @Post()
  create(@Body() createEjercicioRealizadoDto: CreateEjercicioRealizadoDto) {
    return this.ejercicioRealizadoService.create(createEjercicioRealizadoDto);
  }

  @Get()
  findAll() {
    return this.ejercicioRealizadoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ejercicioRealizadoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEjercicioRealizadoDto: UpdateEjercicioRealizadoDto) {
    return this.ejercicioRealizadoService.update(+id, updateEjercicioRealizadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ejercicioRealizadoService.remove(+id);
  }
}
