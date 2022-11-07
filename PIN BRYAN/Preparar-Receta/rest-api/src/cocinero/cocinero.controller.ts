import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { CocineroDTO } from './dto/cocinero.dto';
import { CocineroService } from './cocinero.service';

@Controller('cocinero')
export class CocineroController {
    constructor(private cocineroService: CocineroService){

    }
  
    @Post('/nuevo')
    async nuevoCocinero(@Res() res, @Body() cocineroDTO: CocineroDTO) {
      
      const cocinero = await this.cocineroService.crearCocinero(cocineroDTO);
  
      return res.status(HttpStatus.OK).json({
        message: 'Cocinero registrado correctamente!',
        cocinero: cocinero
      });
    }
  
    @Get('/listar')
    async getCocineros(@Res() res){
  
      const cocineros = await this.cocineroService.obtenerCocineros();
      return res.status(HttpStatus.OK).json({
        cocineros: cocineros
          
      });
        
    }   
    
  
    @Get('/listar/:cocineroID')
    async getCocinero(@Res() res, @Param('cocineroID') cocineroID){
  
      const cocinero = await this.cocineroService.obtenerCocinero(cocineroID);
      if(!cocinero) throw new NotFoundException('El cocinero no existe!')
      return res.status(HttpStatus.OK).json(cocinero);
        
    }
  
    @Put('/update/:cocineroID')
    async putCocinero(@Res() res, @Param('cocineroID') cocineroID, @Body() cocineroDTO: CocineroDTO){
  
      const cocinero = await this.cocineroService.actualizarCocinero(cocineroID, cocineroDTO);
      if(!cocinero) throw new NotFoundException('El cocinero que desea actualizar no existe!')
      return res.status(HttpStatus.OK).json({
        message: 'cocinero actualizado correctamente!',
        cocinero: cocinero
      });
  
    }
  
    @Delete('/eliminar/:cocineroID')
    async deleteCocinero(@Res() res, @Param('cocineroID') cocineroID){
  
      const cocinero = await this.cocineroService.eliminarCocinero(cocineroID)
      if(!cocinero) throw new NotFoundException('El cocinero que desea eliminar no existe!')
      return res.status(HttpStatus.OK).json({
        message: 'Cocinero eliminado correctamente!',
        cocinero
      });
  
    }
}
