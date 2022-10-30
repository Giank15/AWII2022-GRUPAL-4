import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { DeportistaService } from './deportista.service';
import { CreateDeportistaDto } from './dto/create-deportista.dto';
import { UpdateDeportistaDto } from './dto/update-deportista.dto';

@ApiTags('Entidad Desportista Cocumentacion')
@Controller('deportista')
export class DeportistaController {
  constructor(private readonly deportistaService: DeportistaService) {}

  @Post()
  @ApiResponse({status: 200, description: 'Datos ingresados a DB correctamente'})
  @ApiResponse({status: 500, description: 'Error al intentar ingresar datos ala DB'})
  create(@Body() createDeportistaDto: CreateDeportistaDto) {
    return this.deportistaService.Crear(createDeportistaDto);
  }
  

  @Get()
  @ApiResponse({status: 200, description: 'Accion traer todos los datos de DB completa'})
  findAll() {
    return this.deportistaService.BuscarTodos();
  }


  @Get(':id')
  @ApiResponse({status: 200, description: 'Encontrar un dato mediante el id'})
  @ApiResponse({status: 404, description: 'Error al intentar encontrar un dato mediante el id'})
  findOne(@Param('id') id: string) {
    return this.deportistaService.BuscarUno(id);
  }


  @Patch(':id')
  @ApiResponse({status: 200, description: 'Actualizacion del dati elegido completada'})
  @ApiResponse({status: 404, description: 'Error al intentar encontrar un dato mediante el id'})
  update(@Param('id') id: string, @Body() updateDeportistaDto: UpdateDeportistaDto) {
    return this.deportistaService.Actualizar(id, updateDeportistaDto);
  }


  @Delete(':id')
  @ApiResponse({status: 200, description: 'Eliminacion del dato elegido completada'})
  @ApiResponse({status: 404, description: 'Error al intentar encontrar un dato mediante el id'})
  remove(@Param('id') id: string) {
    return this.deportistaService.Eliminar(id);
  }
}
