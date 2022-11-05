import { CreatePedidoDTO } from './dto/pedidos.dto';
import { PedidosService } from './pedidos.service';
export declare class PedidosController {
    private pedidoService;
    constructor(pedidoService: PedidosService);
    createPedido(res: any, createPedidosDTO: any): Promise<any>;
    getPedidos(res: any): Promise<any>;
    getPedido(res: any, pedidoId: any): Promise<any>;
    deletePedido(res: any, pedidoId: any): Promise<any>;
    updatePedido(res: any, createPedidosDTO: CreatePedidoDTO, pedidoId: any): Promise<any>;
}
