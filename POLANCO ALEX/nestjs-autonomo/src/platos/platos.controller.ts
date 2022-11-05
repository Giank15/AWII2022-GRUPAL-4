//Importamos y definimos todos los métodos necesarios para la ejecución del codigo asi como de su funcionamiento 

import { Controller, Get,Post,Put,Delete,Res,HttpStatus,Body,Param,Query,NotFoundException} from '@nestjs/common';
import { CreatePlatoDTO } from './dto/platos.dto';
import { PlatosService } from './platos.service';


//Manejamos los diferentes controladores de procesos 
@Controller('platos')
//Manera en que manejamos las rutas que llegan al servidor 
export class PlatosController {
constructor(private platoService:PlatosService){}


    @Post("/create")
    async createPlato(@Res()res,@Body()createPlatosDTO){
        const platos=await this.platoService.createPlato(createPlatosDTO)

        return res.status(HttpStatus.OK).json({
            message:"Plato creado correctamente",
            platos
        })
    }

    @Get("/")
    async getPlatos(@Res() res){
        const platos=await this.platoService.getPlatos()

        return res.status(HttpStatus.OK).json({
        platos
        })
    }

    @Get("/:platoid")

    async getPlato(@Res() res, @Param("platoId") platoId){
        const platos=await this.platoService.getPlato(platoId)
            if(!platos) throw new NotFoundException("El plato no existe")
            return res.status(HttpStatus.OK).json({
            platos
        })
    }

    @Delete("/")

    async deletePlato(@Res() res, @Query("platoId") platoId ){
        const deletePlato= await this.platoService.deletePlato(platoId)
            if(!deletePlato) throw new NotFoundException("No existe el plato que desea eliminar")
            return  res.status(HttpStatus.OK).json({
                message:"Plato eliminado correctamente",
                deletePlato
         })
    }

    @Put("/update")
    async updatePlato(@Res() res, @Body() createPlatosDTO:CreatePlatoDTO, @Query("platoId") platoId  ){
        const updatePlato= await this.platoService.updatePlato(platoId, createPlatosDTO)

            if( !updatePlato ) throw new NotFoundException("No se encontró el plato")
            return res.status(HttpStatus.OK).json({
                 message:"plato actualizado",
                updatePlato
        })
    }
}