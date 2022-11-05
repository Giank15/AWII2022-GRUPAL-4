"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.platoSchema = void 0;
const mongoose_1 = require("mongoose");
exports.platoSchema = new mongoose_1.Schema({
    id: Number,
    nombreplato: String,
    calidad: String,
    peso: String
});
//# sourceMappingURL=platos.schemas.js.map