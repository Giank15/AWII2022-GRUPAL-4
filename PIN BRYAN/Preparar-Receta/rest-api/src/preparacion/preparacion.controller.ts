import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { PreparacionDTO } from './dto/preparacion.dto';
import { PreparacionService } from './preparacion.service';

@Controller('preparacion')
export class PreparacionController {
    constructor(private preparacionService: PreparacionService){

    }
  
    @Post('/nuevo')
    async nuevaPreparacion(@Res() res, @Body() preparacionDTO: PreparacionDTO) {
      
      const preparacion = await this.preparacionService.crearPreparacion(preparacionDTO);
  
      return res.status(HttpStatus.OK).json({
        message: 'Preparacion registrada correctamente!',
        preparacion: preparacion
      });
    }
  
    @Get('/listar')
    async getPreparaciones(@Res() res){
  
      const preparaciones = await this.preparacionService.obtenerPreparaciones();
      return res.status(HttpStatus.OK).json({
        preparaciones: preparaciones
          
      });
        
    }   
    
  
    @Get('/listar/:preparacionID')
    async getPreparacion(@Res() res, @Param('preparacionID') preparacionID){
  
      const preparacion = await this.preparacionService.obtenerPreparacion(preparacionID);
      if(!preparacion) throw new NotFoundException('La preparacion no existe!')
      return res.status(HttpStatus.OK).json(preparacion);
        
    }
  
    @Put('/update/:preparacionID')
    async putPreparacion(@Res() res, @Param('preparacionID') preparacionID, @Body() preparacionDTO: PreparacionDTO){
  
      const preparacion = await this.preparacionService.actualizarpreparacion(preparacionID, preparacionDTO);
      if(!preparacion) throw new NotFoundException('La preparacion que desea actualizar no existe!')
      return res.status(HttpStatus.OK).json({
        message: 'Preparacion actualizada correctamente!',
        preparacion: preparacion
      });
  
    }
  
    @Delete('/eliminar/:preparacionID')
    async deletePreparacion(@Res() res, @Param('preparacionID') preparacionID){
  
      const preparacion = await this.preparacionService.eliminarPreparacion(preparacionID)
      if(!preparacion) throw new NotFoundException('La preparacion que desea eliminar no existe!')
      return res.status(HttpStatus.OK).json({
        message: 'Preparacion eliminada correctamente!',
        preparacion
      });
  
    }
}
