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
exports.PreparacionController = void 0;
const common_1 = require("@nestjs/common");
const preparacion_dto_1 = require("./dto/preparacion.dto");
const preparacion_service_1 = require("./preparacion.service");
let PreparacionController = class PreparacionController {
    constructor(preparacionService) {
        this.preparacionService = preparacionService;
    }
    async nuevaPreparacion(res, preparacionDTO) {
        const preparacion = await this.preparacionService.crearPreparacion(preparacionDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Preparacion registrada correctamente!',
            preparacion: preparacion
        });
    }
    async getPreparaciones(res) {
        const preparaciones = await this.preparacionService.obtenerPreparaciones();
        return res.status(common_1.HttpStatus.OK).json({
            preparaciones: preparaciones
        });
    }
    async getPreparacion(res, preparacionID) {
        const preparacion = await this.preparacionService.obtenerPreparacion(preparacionID);
        if (!preparacion)
            throw new common_1.NotFoundException('La preparacion no existe!');
        return res.status(common_1.HttpStatus.OK).json(preparacion);
    }
    async putPreparacion(res, preparacionID, preparacionDTO) {
        const preparacion = await this.preparacionService.actualizarpreparacion(preparacionID, preparacionDTO);
        if (!preparacion)
            throw new common_1.NotFoundException('La preparacion que desea actualizar no existe!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Preparacion actualizada correctamente!',
            preparacion: preparacion
        });
    }
    async deletePreparacion(res, preparacionID) {
        const preparacion = await this.preparacionService.eliminarPreparacion(preparacionID);
        if (!preparacion)
            throw new common_1.NotFoundException('La preparacion que desea eliminar no existe!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Preparacion eliminada correctamente!',
            preparacion
        });
    }
};
__decorate([
    (0, common_1.Post)('/nuevo'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, preparacion_dto_1.PreparacionDTO]),
    __metadata("design:returntype", Promise)
], PreparacionController.prototype, "nuevaPreparacion", null);
__decorate([
    (0, common_1.Get)('/listar'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PreparacionController.prototype, "getPreparaciones", null);
__decorate([
    (0, common_1.Get)('/listar/:preparacionID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('preparacionID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PreparacionController.prototype, "getPreparacion", null);
__decorate([
    (0, common_1.Put)('/update/:preparacionID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('preparacionID')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, preparacion_dto_1.PreparacionDTO]),
    __metadata("design:returntype", Promise)
], PreparacionController.prototype, "putPreparacion", null);
__decorate([
    (0, common_1.Delete)('/eliminar/:preparacionID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('preparacionID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PreparacionController.prototype, "deletePreparacion", null);
PreparacionController = __decorate([
    (0, common_1.Controller)('preparacion'),
    __metadata("design:paramtypes", [preparacion_service_1.PreparacionService])
], PreparacionController);
exports.PreparacionController = PreparacionController;
//# sourceMappingURL=preparacion.controller.js.map