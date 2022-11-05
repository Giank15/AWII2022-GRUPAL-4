import { Document } from "mongoose"

export interface Pedidos extends Document{
    readonly id: number;
     ID_plato: number;
     ID_mesero: number;
    readonly Fecha: Date;
    readonly mesa: number;
    readonly cantidad: number;
    readonly precio: number;
}