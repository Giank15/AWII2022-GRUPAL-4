import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoEjercicioService } from './tipo-ejercicio.service';
import { CreateTipoEjercicioDto } from './dto/create-tipo-ejercicio.dto';
import { UpdateTipoEjercicioDto } from './dto/update-tipo-ejercicio.dto';

@Controller('tipo-ejercicio')
export class TipoEjercicioController {
  constructor(private readonly tipoEjercicioService: TipoEjercicioService) {}

  @Post()
  create(@Body() createTipoEjercicioDto: CreateTipoEjercicioDto) {
    return this.tipoEjercicioService.Crear(createTipoEjercicioDto);
  }

  @Get()
  findAll() {
    return this.tipoEjercicioService.BuscarTodos();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipoEjercicioService.BuscarUno(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipoEjercicioDto: UpdateTipoEjercicioDto) {
    return this.tipoEjercicioService.Actualizar(id, updateTipoEjercicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipoEjercicioService.Eliminar(id);
  }
}
