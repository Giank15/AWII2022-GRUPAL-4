"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CocineroSchema = void 0;
const mongoose_1 = require("mongoose");
exports.CocineroSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        require: true,
    },
    sueldo: {
        type: Number,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});
//# sourceMappingURL=cocinero.schema.js.map