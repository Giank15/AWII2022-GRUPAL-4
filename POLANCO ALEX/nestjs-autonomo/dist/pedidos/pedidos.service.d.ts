import { Model } from 'mongoose';
import { Pedidos } from './Interfaces/pedidos.interfaces';
import { CreatePedidoDTO } from './dto/pedidos.dto';
export declare class PedidosService {
    private readonly pedidoModel;
    constructor(pedidoModel: Model<Pedidos>);
    getPedidos(): Promise<Pedidos[]>;
    getPedido(pedidoId: number): Promise<Pedidos>;
    createPedido(createPedidosDto: CreatePedidoDTO): Promise<Pedidos>;
    deletePedido(pedidoId: number): Promise<any>;
    updatePedido(pedidoId: number, createPedidosDto: CreatePedidoDTO): Promise<Pedidos>;
}
