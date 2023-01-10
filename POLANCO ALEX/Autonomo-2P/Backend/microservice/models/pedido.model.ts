import mongoose, {Mongoose} from "mongoose";
//import {IReceta} from "../interfaces/mantenimiento"
import { IPedidos } from "../interfaces/pedido.interface";
const {Schema, model} = mongoose;

const PedidoSchema : mongoose.Schema = new Schema<IPedidos>({
    id: {
        type: String,
        required: [true, 'Se necesita saber el id del Pedido']
    },
    id_mesero: {
        type: String,
        required: [true, 'Se requiere el id del mesero']
    },
    id_plato: {
        type: String,
        required: [true, 'Se requiere el id del plato']

    },
    fecha: {
        type: String,
        required: [true, 'Es necesario saber la fecha']
    },
    mesa: {
        type: String,
        required: [true, 'Es necesario saber la mesa']
    },
    cantidad: {
        type: String,
        required: [true, 'Es necesario saber la calidad']
    },
    precio: {
        type: String,
        required: [true, 'Es necesario saber el precio']
    }
})

export const Pedido = mongoose.model<IPedidos>('Pedidos', PedidoSchema);