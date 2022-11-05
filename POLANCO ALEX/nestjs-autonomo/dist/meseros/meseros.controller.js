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
exports.MeserosController = void 0;
const common_1 = require("@nestjs/common");
const meseros_dto_1 = require("./dto/meseros.dto");
const meseros_service_1 = require("./meseros.service");
let MeserosController = class MeserosController {
    constructor(meseroService) {
        this.meseroService = meseroService;
    }
    async createMesero(res, createMeserosDTO) {
        const meseros = await this.meseroService.createMesero(createMeserosDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Mesero creado correctamente",
            meseros
        });
    }
    async getMeseros(res) {
        const meseros = await this.meseroService.getMeseros();
        return res.status(common_1.HttpStatus.OK).json({
            meseros
        });
    }
    async getMesero(res, meseroId) {
        const meseros = await this.meseroService.getMesero(meseroId);
        if (!meseros)
            throw new common_1.NotFoundException("El mesero no existe");
        return res.status(common_1.HttpStatus.OK).json({
            meseros
        });
    }
    async deleteMesero(res, meseroId) {
        const deleteMesero = await this.meseroService.deleteMesero(meseroId);
        if (!deleteMesero)
            throw new common_1.NotFoundException("No existe el mesero que desea eliminar");
        return res.status(common_1.HttpStatus.OK).json({
            message: "Mesero eliminado correctamente",
            deleteMesero
        });
    }
    async updateMesero(res, createMeserosDTO, meseroId) {
        const updateMesero = await this.meseroService.updateMesero(meseroId, createMeserosDTO);
        if (!updateMesero)
            throw new common_1.NotFoundException("No se encontró el mesero");
        return res.status(common_1.HttpStatus.OK).json({
            message: "mesero actualizado",
            updateMesero
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
], MeserosController.prototype, "createMesero", null);
__decorate([
    (0, common_1.Get)("/"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MeserosController.prototype, "getMeseros", null);
__decorate([
    (0, common_1.Get)("/:meseroid"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("meseroId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MeserosController.prototype, "getMesero", null);
__decorate([
    (0, common_1.Delete)("/"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)("meseroId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], MeserosController.prototype, "deleteMesero", null);
__decorate([
    (0, common_1.Put)("/update"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)("meseroId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, meseros_dto_1.CreateMeseroDTO, Object]),
    __metadata("design:returntype", Promise)
], MeserosController.prototype, "updateMesero", null);
MeserosController = __decorate([
    (0, common_1.Controller)('meseros'),
    __metadata("design:paramtypes", [meseros_service_1.MeserosService])
], MeserosController);
exports.MeserosController = MeserosController;
//# sourceMappingURL=meseros.controller.js.map