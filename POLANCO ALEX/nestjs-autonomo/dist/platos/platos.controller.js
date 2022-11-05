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
exports.PlatosController = void 0;
const common_1 = require("@nestjs/common");
const platos_dto_1 = require("./dto/platos.dto");
const platos_service_1 = require("./platos.service");
let PlatosController = class PlatosController {
    constructor(platoService) {
        this.platoService = platoService;
    }
    async createPlato(res, createPlatosDTO) {
        const platos = await this.platoService.createPlato(createPlatosDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Plato creado correctamente",
            platos
        });
    }
    async getPlatos(res) {
        const platos = await this.platoService.getPlatos();
        return res.status(common_1.HttpStatus.OK).json({
            platos
        });
    }
    async getPlato(res, platoId) {
        const platos = await this.platoService.getPlato(platoId);
        if (!platos)
            throw new common_1.NotFoundException("El plato no existe");
        return res.status(common_1.HttpStatus.OK).json({
            platos
        });
    }
    async deletePlato(res, platoId) {
        const deletePlato = await this.platoService.deletePlato(platoId);
        if (!deletePlato)
            throw new common_1.NotFoundException("No existe el plato que desea eliminar");
        return res.status(common_1.HttpStatus.OK).json({
            message: "Plato eliminado correctamente",
            deletePlato
        });
    }
    async updatePlato(res, createPlatosDTO, platoId) {
        const updatePlato = await this.platoService.updatePlato(platoId, createPlatosDTO);
        if (!updatePlato)
            throw new common_1.NotFoundException("No se encontró el plato");
        return res.status(common_1.HttpStatus.OK).json({
            message: "plato actualizado",
            updatePlato
        });
    }
};
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PlatosController.prototype, "createPlato", null);
__decorate([
    (0, common_1.Get)("/"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PlatosController.prototype, "getPlatos", null);
__decorate([
    (0, common_1.Get)("/:platoid"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("platoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PlatosController.prototype, "getPlato", null);
__decorate([
    (0, common_1.Delete)("/"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)("platoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PlatosController.prototype, "deletePlato", null);
__decorate([
    (0, common_1.Put)("/update"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)("platoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, platos_dto_1.CreatePlatoDTO, Object]),
    __metadata("design:returntype", Promise)
], PlatosController.prototype, "updatePlato", null);
PlatosController = __decorate([
    (0, common_1.Controller)('platos'),
    __metadata("design:paramtypes", [platos_service_1.PlatosService])
], PlatosController);
exports.PlatosController = PlatosController;
//# sourceMappingURL=platos.controller.js.map