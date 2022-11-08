import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { servicioCliente } from '../services/cliente.service';
import { validacionCliente } from '../validacion/clienteV';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Documentación de la entidad Cliente')
@Controller('Cliente')
export class controladorCliente{
    constructor(private readonly servicioCliente: servicioCliente){}

    @Post()
    @ApiResponse({status: 200, description: 'Datos ingresados correctamente...'})
    @ApiResponse({status: 500, description: 'Error al ingresar datos'})
    create(@Body() validacionCliente: validacionCliente){
        return this.servicioCliente.Crear(validacionCliente);
    }

    @Get()
    @ApiResponse({status: 200, description: 'Consulta completa de los datos realizada...'})
    findAll(){
        return this.servicioCliente.BuscarTodos();
    }

    @Get(':id')
    @ApiResponse({status: 200, description: 'Consulta por ID realizada...'})
    @ApiResponse({status: 404, description: 'Error al consultar dato mediante ID'})
    findOne(@Param('id') id: string){
        return this.servicioCliente.BuscarUno(id);
    }

    @Patch(':id')
    @ApiResponse({status: 200, description: 'Actualización realizada correctamente...'})
    @ApiResponse({status: 404, description: 'Error al actualizar dato'})
    update(@Param('id') id: string, @Body() validacionCliente: validacionCliente){
        return this.servicioCliente.Actualizar(id, validacionCliente);
    }

    @Delete(':id')
    @ApiResponse({status: 200, description: 'Eliminación realizada correctamente...'})
    @ApiResponse({status: 404, description: 'Error al eliminar dato'})
    remove(@Param('id') id: string){
        return this.servicioCliente.Eliminar(id);
    }
}