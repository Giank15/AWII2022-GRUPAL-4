export interface IRPedido{
    pedidos: Pedido[];
}

export interface Pedido{
_id?:string;
id_mesero: string;
id_plato: string;
fecha: string;
mesa: string;
cantidad:string;
precio:string;
}