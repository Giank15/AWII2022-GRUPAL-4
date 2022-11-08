"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecetaSchema = void 0;
const mongoose_1 = require("mongoose");
exports.RecetaSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: true,
    },
    ingredientesCant: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
//# sourceMappingURL=receta.schema.js.map