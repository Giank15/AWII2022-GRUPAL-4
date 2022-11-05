"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.meserosSchema = void 0;
const mongoose_1 = require("mongoose");
exports.meserosSchema = new mongoose_1.Schema({
    id: Number,
    Nombre: String,
    CI: Number,
    SueldoBasico: Number,
    Nivel: String
});
//# sourceMappingURL=meseros.schemas.js.map