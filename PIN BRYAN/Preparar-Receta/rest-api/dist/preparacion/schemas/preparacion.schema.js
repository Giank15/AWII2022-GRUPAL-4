"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreparacionSchema = void 0;
const mongoose_1 = require("mongoose");
exports.PreparacionSchema = new mongoose_1.Schema({
    fecha: {
        type: String,
        require: true,
    },
    hora: {
        type: String,
        require: true,
    },
    cantidad: {
        type: Number,
        require: true,
    },
    costo: {
        type: Number,
        require: true,
    },
    tiempo: {
        type: String,
        require: true,
    },
    idreceta: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Receta' },
    idmesero: { type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Cocinero' }
});
//# sourceMappingURL=preparacion.schema.js.map