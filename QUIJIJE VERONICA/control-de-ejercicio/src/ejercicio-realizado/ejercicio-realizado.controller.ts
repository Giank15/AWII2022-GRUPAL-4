import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EjercicioRealizadoService } from './ejercicio-realizado.service';
import { CreateEjercicioRealizadoDto } from './dto/create-ejercicio-realizado.dto';
import { UpdateEjercicioRealizadoDto } from './dto/update-ejercicio-realizado.dto';

@Controller('ejercicio-realizado')
export class EjercicioRealizadoController {
  constructor(private readonly ejercicioRealizadoService: EjercicioRealizadoService) {}

  @Post()
  create(@Body() createEjercicioRealizadoDto: CreateEjercicioRealizadoDto) {
    return this.ejercicioRealizadoService.Crear(createEjercicioRealizadoDto);
  }

  @Get()
  findAll() {
    return this.ejercicioRealizadoService.BuscarTodos();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ejercicioRealizadoService.BuscarUno(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEjercicioRealizadoDto: UpdateEjercicioRealizadoDto) {
    return this.ejercicioRealizadoService.Actualizar(id, updateEjercicioRealizadoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ejercicioRealizadoService.Eliminar(id);
  }
}
