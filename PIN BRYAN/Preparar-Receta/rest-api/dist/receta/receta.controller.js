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
exports.RecetaController = void 0;
const common_1 = require("@nestjs/common");
const receta_dto_1 = require("./dto/receta.dto");
const receta_service_1 = require("./receta.service");
let RecetaController = class RecetaController {
    constructor(recetaService) {
        this.recetaService = recetaService;
    }
    async nuevaReceta(res, recetaDTO) {
        const receta = await this.recetaService.crearReceta(recetaDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Receta registrada correctamente!',
            receta: receta
        });
    }
    async getRecetas(res) {
        const recetas = await this.recetaService.obtenerRecetas();
        return res.status(common_1.HttpStatus.OK).json({
            recetas: recetas
        });
    }
    async getReceta(res, recetaID) {
        const receta = await this.recetaService.obtenerReceta(recetaID);
        if (!receta)
            throw new common_1.NotFoundException('La receta no existe!');
        return res.status(common_1.HttpStatus.OK).json(receta);
    }
    async putReceta(res, recetaID, recetaDTO) {
        const receta = await this.recetaService.actualizarReceta(recetaID, recetaDTO);
        if (!receta)
            throw new common_1.NotFoundException('La receta que desea actualizar no existe!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Receta actualizada correctamente!',
            receta: receta
        });
    }
    async deleteReceta(res, recetaID) {
        const receta = await this.recetaService.eliminarReceta(recetaID);
        if (!receta)
            throw new common_1.NotFoundException('La receta que desea eliminar no existe!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Receta eliminada correctamente!',
            receta
        });
    }
};
__decorate([
    (0, common_1.Post)('/nuevo'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, receta_dto_1.RecetaDTO]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "nuevaReceta", null);
__decorate([
    (0, common_1.Get)('/listar'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "getRecetas", null);
__decorate([
    (0, common_1.Get)('/listar/:recetaID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('recetaID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "getReceta", null);
__decorate([
    (0, common_1.Put)('/update/:recetaID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('recetaID')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, receta_dto_1.RecetaDTO]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "putReceta", null);
__decorate([
    (0, common_1.Delete)('/eliminar/:recetaID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('recetaID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], RecetaController.prototype, "deleteReceta", null);
RecetaController = __decorate([
    (0, common_1.Controller)('receta'),
    __metadata("design:paramtypes", [receta_service_1.RecetaService])
], RecetaController);
exports.RecetaController = RecetaController;
//# sourceMappingURL=receta.controller.js.map