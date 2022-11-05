import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Pedidos } from './Interfaces/pedidos.interfaces';
import { Mode } from 'fs';
import { CreatePedidoDTO } from './dto/pedidos.dto';


@Injectable()
export class PedidosService {
    constructor(@InjectModel("Pedido") private readonly pedidoModel:Model<Pedidos>){}

    async getPedidos():Promise <Pedidos[]>{
        const pedidos=await this.pedidoModel.find()
        return pedidos
    }

    /////
    async getPedido(pedidoId:number):Promise<Pedidos>{
        const pedidos= await this.pedidoModel.findById(pedidoId)
        return pedidos
        }
    
    
        async createPedido(createPedidosDto:CreatePedidoDTO):Promise<Pedidos>{
            const pedidos=new this.pedidoModel(createPedidosDto)
            return await pedidos.save()
        }
    
    
        async deletePedido(pedidoId:number){
         const deletePedido= await this.pedidoModel.findByIdAndDelete(pedidoId)
         return deletePedido
        }
    
        async updatePedido(pedidoId:number, createPedidosDto:CreatePedidoDTO):Promise<Pedidos>{
            const updatePedido= await this.pedidoModel.findByIdAndUpdate(pedidoId, createPedidosDto, {new:true})
            return updatePedido
        }
    
}
