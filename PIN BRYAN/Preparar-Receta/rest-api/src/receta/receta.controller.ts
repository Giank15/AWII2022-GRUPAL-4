import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body, Param, NotFoundException, Query } from '@nestjs/common';
import { RecetaDTO } from './dto/receta.dto';
import { RecetaService } from './receta.service';

@Controller('receta')
export class RecetaController {
    constructor(private recetaService: RecetaService){

    }
  
    @Post('/nuevo')
    async nuevaReceta(@Res() res, @Body() recetaDTO: RecetaDTO) {
      
      const receta = await this.recetaService.crearReceta(recetaDTO);
  
      return res.status(HttpStatus.OK).json({
        message: 'Receta registrada correctamente!',
        receta: receta
      });
    }
  
    @Get('/listar')
    async getRecetas(@Res() res){
  
      const recetas = await this.recetaService.obtenerRecetas();
      return res.status(HttpStatus.OK).json({
        recetas: recetas
          
      });
        
    }   
    
  
    @Get('/listar/:recetaID')
    async getReceta(@Res() res, @Param('recetaID') recetaID){
  
      const receta = await this.recetaService.obtenerReceta(recetaID);
      if(!receta) throw new NotFoundException('La receta no existe!')
      return res.status(HttpStatus.OK).json(receta);
        
    }
  
    @Put('/update/:recetaID')
    async putReceta(@Res() res, @Param('recetaID') recetaID, @Body() recetaDTO: RecetaDTO){
  
      const receta = await this.recetaService.actualizarReceta(recetaID, recetaDTO);
      if(!receta) throw new NotFoundException('La receta que desea actualizar no existe!')
      return res.status(HttpStatus.OK).json({
        message: 'Receta actualizada correctamente!',
        receta: receta
      });
  
    }
  
    @Delete('/eliminar/:recetaID')
    async deleteReceta(@Res() res, @Param('recetaID') recetaID){
  
      const receta = await this.recetaService.eliminarReceta(recetaID)
      if(!receta) throw new NotFoundException('La receta que desea eliminar no existe!')
      return res.status(HttpStatus.OK).json({
        message: 'Receta eliminada correctamente!',
        receta
      });
  
    }
}
