import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { servicioMesero } from '../services/mesero.service';
import { validacionMesero } from '../validacion/meseroV';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Documentación de la entidad Mesero')
@Controller('Mesero')
export class controladorMesero{
    constructor(private readonly servicioMesero: servicioMesero){}

    @Post()
    @ApiResponse({status: 200, description: 'Datos ingresados correctamente...'})
    @ApiResponse({status: 500, description: 'Error al ingresar datos'})
    create(@Body() validacionMesero: validacionMesero){
        return this.servicioMesero.Crear(validacionMesero);
    }

    @Get()
    @ApiResponse({status: 200, description: 'Consulta completa de los datos realizada...'})
    findAll(){
        return this.servicioMesero.BuscarTodos();
    }

    @Get(':id')
    @ApiResponse({status: 200, description: 'Consulta por ID realizada...'})
    @ApiResponse({status: 404, description: 'Error al consultar dato mediante ID'})
    findOne(@Param('id') id: string){
        return this.servicioMesero.BuscarUno(id);
    }

    @Patch(':id')
    @ApiResponse({status: 200, description: 'Actualización realizada correctamente...'})
    @ApiResponse({status: 404, description: 'Error al actualizar dato'})
    update(@Param('id') id: string, @Body() validacionMesero: validacionMesero){
        return this.servicioMesero.Actualizar(id, validacionMesero);
    }

    @Delete(':id')
    @ApiResponse({status: 200, description: 'Eliminación realizada correctamente...'})
    @ApiResponse({status: 404, description: 'Error al eliminar dato'})
    remove(@Param('id') id: string){
        return this.servicioMesero.Eliminar(id);
    }
}