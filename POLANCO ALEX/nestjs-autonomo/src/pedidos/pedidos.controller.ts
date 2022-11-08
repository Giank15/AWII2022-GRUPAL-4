//Llamamos a los métodos que serán utilizados 
import { Controller, Get, Post,Put,Delete, Res, HttpStatus, Body, Param, Query, NotFoundException} from '@nestjs/common';
import { validacionPedido } from './dto/pedidos.validacion';
import { CreatePedidoDTO } from './dto/pedidos.dto';
import { PedidosService } from './pedidos.service';


@Controller('pedidos')
//Manera en que manejamos las rutas que llegan al servidor 
export class PedidosController {
constructor(private pedidoService:PedidosService){}


    @Post("/create")
    async createPedido(@Res()res,@Body()createPedidosDTO){
        const pedidos=await this.pedidoService.createPedido(createPedidosDTO)

        return res.status(HttpStatus.OK).json({
            message:"Pedido creado correctamente",
            pedidos
        })
    }

    @Get("/")
    async getPedidos(@Res() res){
        const pedidos=await this.pedidoService.getPedidos()

        return res.status(HttpStatus.OK).json({
        pedidos
        })
    }

    @Get("/:pedidoid")

    async getPedido(@Res() res, @Param("pedidoId") pedidoId){
        const pedidos=await this.pedidoService.getPedido(pedidoId)
            if(!pedidos) throw new NotFoundException("El pedido no existe")
            return res.status(HttpStatus.OK).json({
            pedidos
        })
    }

    @Delete("/")

    async deletePedido(@Res() res, @Query("pedidoId") pedidoId ){
        const deletePedido= await this.pedidoService.deletePedido(pedidoId)
            if(!deletePedido) throw new NotFoundException("No existe el pedido que desea eliminar")
            return  res.status(HttpStatus.OK).json({
                message:"Pedido eliminado correctamente",
                deletePedido
         })
    }

    @Put("/update")
    async updatePedido(@Res() res, @Body() createPedidosDTO:CreatePedidoDTO, @Query("pedidoId") pedidoId  ){
        const updatePedido= await this.pedidoService.updatePedido(pedidoId, createPedidosDTO)

            if( !updatePedido ) throw new NotFoundException("No se encontró el pedido")
            return res.status(HttpStatus.OK).json({
                 message:"pedido actualizado",
                updatePedido
        })
    }
}
