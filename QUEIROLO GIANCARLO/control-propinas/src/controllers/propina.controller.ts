import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { servicioPropina } from '../services/propina.service';
import { validacionPropina } from '../validacion/propinaV';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Documentación de la entidad Propina')
@Controller('Propina')
export class controladorPropina{
    constructor(private readonly servicioPropina: servicioPropina){}

    @Post()
    @ApiResponse({status: 200, description: 'Datos ingresados correctamente...'})
    @ApiResponse({status: 500, description: 'Error al ingresar datos'})
    create(@Body() validacionPropina: validacionPropina){
        return this.servicioPropina.Crear(validacionPropina);
    }

    @Get()
    @ApiResponse({status: 200, description: 'Consulta completa de los datos realizada...'})
    findAll(){
        return this.servicioPropina.BuscarTodos();
    }

    @Get(':id')
    @ApiResponse({status: 200, description: 'Consulta por ID realizada...'})
    @ApiResponse({status: 404, description: 'Error al consultar dato mediante ID'})
    findOne(@Param('id') id: string){
        return this.servicioPropina.BuscarUno(id);
    }

    @Patch(':id')
    @ApiResponse({status: 200, description: 'Actualización realizada correctamente...'})
    @ApiResponse({status: 404, description: 'Error al actualizar dato'})
    update(@Param('id') id: string, @Body() validacionPropina: validacionPropina){
        return this.servicioPropina.Actualizar(id, validacionPropina);
    }

    @Delete(':id')
    @ApiResponse({status: 200, description: 'Eliminación realizada correctamente...'})
    @ApiResponse({status: 404, description: 'Error al eliminar dato'})
    remove(@Param('id') id: string){
        return this.servicioPropina.Eliminar(id);
    }
}