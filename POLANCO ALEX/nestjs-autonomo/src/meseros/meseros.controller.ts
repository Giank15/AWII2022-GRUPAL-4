import { Controller, Get,Post,Put,Delete,Res,HttpStatus,Body,Param,Query,NotFoundException } from '@nestjs/common';
import { CreateMeseroDTO } from './dto/meseros.dto';
import { MeserosService } from './meseros.service';

@Controller('meseros')
//Manera en que manejamos las rutas que llegan al servidor 
export class MeserosController {
constructor(private meseroService:MeserosService){}


    @Post("/create")
    async createMesero(@Res()res,@Body()createMeserosDTO){
        const meseros=await this.meseroService.createMesero(createMeserosDTO)

        return res.status(HttpStatus.OK).json({
            message:"Mesero creado correctamente",
            meseros
        })
    }

    @Get("/")
    async getMeseros(@Res() res){
        const meseros=await this.meseroService.getMeseros()

        return res.status(HttpStatus.OK).json({
        meseros
        })
    }

    @Get("/:meseroid")

    async getMesero(@Res() res, @Param("meseroId") meseroId){
        const meseros=await this.meseroService.getMesero(meseroId)
            if(!meseros) throw new NotFoundException("El mesero no existe")
            return res.status(HttpStatus.OK).json({
            meseros
        })
    }

    @Delete("/")

    async deleteMesero(@Res() res, @Query("meseroId") meseroId ){
        const deleteMesero= await this.meseroService.deleteMesero(meseroId)
            if(!deleteMesero) throw new NotFoundException("No existe el mesero que desea eliminar")
            return  res.status(HttpStatus.OK).json({
                message:"Mesero eliminado correctamente",
                deleteMesero
         })
    }

    @Put("/update")
    async updateMesero(@Res() res, @Body() createMeserosDTO:CreateMeseroDTO, @Query("meseroId") meseroId  ){
        const updateMesero= await this.meseroService.updateMesero(meseroId, createMeserosDTO)

            if( !updateMesero ) throw new NotFoundException("No se encontró el mesero")
            return res.status(HttpStatus.OK).json({
                 message:"mesero actualizado",
                updateMesero
        })
    }
}
