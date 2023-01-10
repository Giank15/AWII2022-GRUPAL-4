import { Controller, Get, Post, Delete, Put, Res, HttpStatus, Body, NotFoundException, Param, Query } from '@nestjs/common';
import { CreateMeseroDto } from './dto/mesero.dto';
import {MeseroService} from "./mesero.service"

@Controller('mesero')
export class MeseroController {
constructor (private meseroService: MeseroService){}

@Post("/create")
async createMesero(@Res() res, @Body() createMesero:CreateMeseroDto){
 const create= await this.meseroService.createMesero(createMesero)
return res.status(HttpStatus.OK).json({
    message:"El mesero se creó con éxito",
    create
})
}

@Get("/")
async getMeseros(@Res() res){
const meseros=await this.meseroService.getMeseros()
return res.status(HttpStatus.OK).json({
    meseros
})
}

@Get("/:meseroId")
//TUVE QUE SACARLE LOS PARENTESIS AL JSON PARA QUE LLEGUE EL IDIOMA
async getMesero(@Res() res,@Param("meseroId") meseroId  ){
    const mesero=await this.meseroService.getMesero(meseroId)
    if(!mesero) throw new NotFoundException("No existe ese mesero")
    return res.status(HttpStatus.OK).json(
        mesero
    )
}


@Put("/update")
async updateMesero(@Res() res, @Query("meseroId") meseroId, @Body() createMeseroDto:CreateMeseroDto){
const updatedMesero=await this.meseroService.updateMesero(meseroId, createMeseroDto)
if(!updatedMesero) throw new NotFoundException("No existe el mesero que desea eliminar")
return res.status(HttpStatus.OK).json({
    message:"Mesero actualizado",
    updatedMesero
})
}

@Delete("/delete")
async deleteMesero(@Res() res,@Query("meseroId") meseroId ){
const deletedMesero=await this.meseroService.deleteMesero(meseroId)
if(!deletedMesero) throw new NotFoundException("No existe el mesero que desea eliminar")
return res.status(HttpStatus.OK).json({
    message:"Mesero eliminado exitosamente",
    deletedMesero
})
}




}
