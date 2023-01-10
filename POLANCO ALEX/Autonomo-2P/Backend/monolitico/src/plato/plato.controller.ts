import { Controller, Get, Put, Delete, Post, Res, HttpStatus, Body, Param, NotFoundException, Query} from '@nestjs/common';
import {CreatePlatoDto} from "./dto/plato.dto"
import {PlatoService} from "./plato.service"

@Controller('plato')
export class PlatoController {

constructor (private platoService:PlatoService){}

@Post("/create")
async createPlato(@Res() res, @Body() createPlato:CreatePlatoDto){
const plato= await this.platoService.createPlato(createPlato)
 return res.status(HttpStatus.OK).json({
    message:"plato creado",
    plato

})
}

@Get("/")
async getPlatos(@Res() res){
    const platos= await this.platoService.getPlatos()
  return  res.status(HttpStatus.OK).json({
        platos
    })
}

//aqui se envia el instructor sin corchetes
@Get("/:platoId")
async getPlato(@Res() res, @Param("platoId") platoId ){
    const plato= await this.platoService.getPlato(platoId)
    if(!plato) throw new NotFoundException("No se encontró el plato")
   return res.status(HttpStatus.OK).json(
        plato
    )

}

@Put("/update")
async updatePlato(@Res() res, @Query("platoId") platoId, @Body() createPlatoDto:CreatePlatoDto ){
const updatedPlato= await this.platoService.updatePlato(platoId, createPlatoDto)
if(!updatedPlato) throw new NotFoundException("No se encontró el plato")
return res.status(HttpStatus.OK).json({
    message:"plato actualizado",
    updatedPlato
})
}


@Delete("/delete")
async deletePlato(@Res() res,@Query("platoId") platoId ){
const deletedPlato=await this.platoService.deletePlato(platoId)
if(!deletedPlato) throw new NotFoundException("No existe el plato que desea eliminar")
return res.status(HttpStatus.OK).json({
    message:"Plato eliminado exitosamente",
    deletedPlato
})
}


}
