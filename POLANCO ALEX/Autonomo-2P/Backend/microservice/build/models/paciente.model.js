"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema, model } = mongoose_1.default;
const PedidoSchema = new Schema({
    id: {
        type: String,
        required: [true, 'Se necesita saber el di del Paciente']
    },
    idmesero: {
        type: String,
        required: [true, 'Se requiere el id del mesero']
    },
    idplato: {
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
        required: [true, 'Es necesario saber la cantidad']
    },
    precio: {
        type: String,
        required: [true, 'Es necesario saber el precio']
    }
});
exports.Pedido = mongoose_1.default.model('Pedidos', PedidoSchema);
