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
exports.CocineroController = void 0;
const common_1 = require("@nestjs/common");
const cocinero_dto_1 = require("./dto/cocinero.dto");
const cocinero_service_1 = require("./cocinero.service");
let CocineroController = class CocineroController {
    constructor(cocineroService) {
        this.cocineroService = cocineroService;
    }
    async nuevoCocinero(res, cocineroDTO) {
        const cocinero = await this.cocineroService.crearCocinero(cocineroDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Cocinero registrado correctamente!',
            cocinero: cocinero
        });
    }
    async getCocineros(res) {
        const cocineros = await this.cocineroService.obtenerCocineros();
        return res.status(common_1.HttpStatus.OK).json({
            cocineros: cocineros
        });
    }
    async getCocinero(res, cocineroID) {
        const cocinero = await this.cocineroService.obtenerCocinero(cocineroID);
        if (!cocinero)
            throw new common_1.NotFoundException('El cocinero no existe!');
        return res.status(common_1.HttpStatus.OK).json(cocinero);
    }
    async putCocinero(res, cocineroID, cocineroDTO) {
        const cocinero = await this.cocineroService.actualizarCocinero(cocineroID, cocineroDTO);
        if (!cocinero)
            throw new common_1.NotFoundException('El cocinero que desea actualizar no existe!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'cocinero actualizado correctamente!',
            cocinero: cocinero
        });
    }
    async deleteCocinero(res, cocineroID) {
        const cocinero = await this.cocineroService.eliminarCocinero(cocineroID);
        if (!cocinero)
            throw new common_1.NotFoundException('El cocinero que desea eliminar no existe!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'Cocinero eliminado correctamente!',
            cocinero
        });
    }
};
__decorate([
    (0, common_1.Post)('/nuevo'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, cocinero_dto_1.CocineroDTO]),
    __metadata("design:returntype", Promise)
], CocineroController.prototype, "nuevoCocinero", null);
__decorate([
    (0, common_1.Get)('/listar'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CocineroController.prototype, "getCocineros", null);
__decorate([
    (0, common_1.Get)('/listar/:cocineroID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('cocineroID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CocineroController.prototype, "getCocinero", null);
__decorate([
    (0, common_1.Put)('/update/:cocineroID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('cocineroID')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, cocinero_dto_1.CocineroDTO]),
    __metadata("design:returntype", Promise)
], CocineroController.prototype, "putCocinero", null);
__decorate([
    (0, common_1.Delete)('/eliminar/:cocineroID'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)('cocineroID')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], CocineroController.prototype, "deleteCocinero", null);
CocineroController = __decorate([
    (0, common_1.Controller)('cocinero'),
    __metadata("design:paramtypes", [cocinero_service_1.CocineroService])
], CocineroController);
exports.CocineroController = CocineroController;
//# sourceMappingURL=cocinero.controller.js.map