"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecetaService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let RecetaService = class RecetaService {
    constructor(recetaModel) {
        this.recetaModel = recetaModel;
    }
    async crearReceta(recetaDTO) {
        const receta = new this.recetaModel(recetaDTO);
        return await receta.save();
    }
    async obtenerRecetas() {
        const receta = await this.recetaModel.find();
        return receta;
    }
    async obtenerReceta(recetaID) {
        const receta = await this.recetaModel.findById(recetaID);
        return receta;
    }
    async actualizarReceta(recetaID, recetaDTO) {
        const recetaAct = await this.recetaModel.findByIdAndUpdate(recetaID, recetaDTO, { new: true });
        return recetaAct;
    }
    async eliminarReceta(recetaID) {
        const recetaDel = await this.recetaModel.findByIdAndDelete(recetaID);
        return recetaDel;
    }
};
RecetaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Receta')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], RecetaService);
exports.RecetaService = RecetaService;
//# sourceMappingURL=receta.service.js.map