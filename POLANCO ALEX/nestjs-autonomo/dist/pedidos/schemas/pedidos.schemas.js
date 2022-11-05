"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedidosSchema = void 0;
const mongoose_1 = require("mongoose");
exports.pedidosSchema = new mongoose_1.Schema({
    id: Number,
    ID_plato: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Platos"
        }],
    ID_mesero: [{
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Meseros"
        }],
    Fecha: {
        type: Date,
        default: Date.now
    },
    mesa: Number,
    cantidad: Number,
    precio: Number
});
//# sourceMappingURL=pedidos.schemas.js.map