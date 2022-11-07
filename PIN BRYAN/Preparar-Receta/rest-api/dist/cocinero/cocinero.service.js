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
exports.CocineroService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let CocineroService = class CocineroService {
    constructor(cocineroModel) {
        this.cocineroModel = cocineroModel;
    }
    async crearCocinero(cocineroDTO) {
        const cocinero = new this.cocineroModel(cocineroDTO);
        return await cocinero.save();
    }
    async obtenerCocineros() {
        const cocineros = await this.cocineroModel.find();
        return cocineros;
    }
    async obtenerCocinero(cocineroID) {
        const cocinero = await this.cocineroModel.findById(cocineroID);
        return cocinero;
    }
    async actualizarCocinero(cocineroID, cocineroDTO) {
        const cocineroAct = await this.cocineroModel.findByIdAndUpdate(cocineroID, cocineroDTO, { new: true });
        return cocineroAct;
    }
    async eliminarCocinero(cocineroID) {
        const cocineroDel = await this.cocineroModel.findByIdAndDelete(cocineroID);
        return cocineroDel;
    }
};
CocineroService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)('Cocinero')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CocineroService);
exports.CocineroService = CocineroService;
//# sourceMappingURL=cocinero.service.js.map