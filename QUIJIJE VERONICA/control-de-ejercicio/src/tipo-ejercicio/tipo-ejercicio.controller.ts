import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipoEjercicioService } from './tipo-ejercicio.service';
import { CreateTipoEjercicioDto } from './dto/create-tipo-ejercicio.dto';
import { UpdateTipoEjercicioDto } from './dto/update-tipo-ejercicio.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Entidad Tipo de Ejercicio Cocumentacion')
@Controller('tipo-ejercicio')
export class TipoEjercicioController {
  constructor(private readonly tipoEjercicioService: TipoEjercicioService) {}

  @Post()
  @ApiResponse({status: 200, description: 'Datos ingresados a DB correctamente'})
  @ApiResponse({status: 500, description: 'Error al intentar ingresar datos ala DB'})
  create(@Body() createTipoEjercicioDto: CreateTipoEjercicioDto) {
    return this.tipoEjercicioService.Crear(createTipoEjercicioDto);
  }

  @Get()
  @ApiResponse({status: 200, description: 'Accion traer todos los datos de DB completa'})
  findAll() {
    return this.tipoEjercicioService.BuscarTodos();
  }

  @Get(':id')
  @ApiResponse({status: 200, description: 'Encontrar un dato mediante el id'})
  @ApiResponse({status: 404, description: 'Error al intentar encontrar un dato mediante el id'})
  findOne(@Param('id') id: string) {
    return this.tipoEjercicioService.BuscarUno(id);
  }

  @Patch(':id')
  @ApiResponse({status: 200, description: 'Actualizacion del dati elegido completada'})
  @ApiResponse({status: 404, description: 'Error al intentar encontrar un dato mediante el id'})
  update(@Param('id') id: string, @Body() updateTipoEjercicioDto: UpdateTipoEjercicioDto) {
    return this.tipoEjercicioService.Actualizar(id, updateTipoEjercicioDto);
  }

  @Delete(':id')
  @ApiResponse({status: 200, description: 'Eliminacion del dato elegido completada'})
  @ApiResponse({status: 404, description: 'Error al intentar encontrar un dato mediante el id'})
  remove(@Param('id') id: string) {
    return this.tipoEjercicioService.Eliminar(id);
  }
}
