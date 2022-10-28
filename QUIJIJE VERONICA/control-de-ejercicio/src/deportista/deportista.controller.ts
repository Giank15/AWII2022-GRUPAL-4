import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeportistaService } from './deportista.service';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';

@Controller('deportista')
export class DeportistaController {
  constructor(private readonly deportistaService: DeportistaService) {}

  @Post()
  create(@Body() createDeportistaDto: CreateDeportistaDto) {
    return this.deportistaService.Crear(createDeportistaDto);
  }

  @Get()
  findAll() {
    return this.deportistaService.BuscarTodos();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deportistaService.BuscarUno(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeportistaDto: UpdateDeportistaDto) {
    return this.deportistaService.Actualizar(id, updateDeportistaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deportistaService.Eliminar(id);
  }
}
