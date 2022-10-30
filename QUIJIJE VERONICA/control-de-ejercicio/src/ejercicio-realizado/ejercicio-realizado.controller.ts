import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EjercicioRealizadoService } from './ejercicio-realizado.service';
import { CreateEjercicioRealizadoDto } from './dto/create-ejercicio-realizado.dto';
import { UpdateEjercicioRealizadoDto } from './dto/update-ejercicio-realizado.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Entidad Ejercicio Realizado Cocumentacion')
@Controller('ejercicio-realizado')
export class EjercicioRealizadoController {
  constructor(private readonly ejercicioRealizadoService: EjercicioRealizadoService) {}

  @Post()
  @ApiResponse({status: 200, description: 'Datos ingresados a DB correctamente'})
  @ApiResponse({status: 500, description: 'Error al intentar ingresar datos ala DB'})
  create(@Body() createEjercicioRealizadoDto: CreateEjercicioRealizadoDto) {
    return this.ejercicioRealizadoService.Crear(createEjercicioRealizadoDto);
  }

  @Get()
  @ApiResponse({status: 200, description: 'Accion traer todos los datos de DB completa'})
  findAll() {
    return this.ejercicioRealizadoService.BuscarTodos();
  }

  @Get(':id')
  @ApiResponse({status: 200, description: 'Encontrar un dato mediante el id'})
  @ApiResponse({status: 404, description: 'Error al intentar encontrar un dato mediante el id'})
  findOne(@Param('id') id: string) {
    return this.ejercicioRealizadoService.BuscarUno(id);
  }

  @Patch(':id')
  @ApiResponse({status: 200, description: 'Actualizacion del dati elegido completada'})
  @ApiResponse({status: 404, description: 'Error al intentar encontrar un dato mediante el id'})
  update(@Param('id') id: string, @Body() updateEjercicioRealizadoDto: UpdateEjercicioRealizadoDto) {
    return this.ejercicioRealizadoService.Actualizar(id, updateEjercicioRealizadoDto);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description: 'Eliminacion del dato elegido completada'})
  @ApiResponse({status: 404, description: 'Error al intentar encontrar un dato mediante el id'})
  remove(@Param('id') id: string) {
    return this.ejercicioRealizadoService.Eliminar(id);
  }
}
