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
exports.controladorMesero = void 0;
const common_1 = require("@nestjs/common");
const mesero_service_1 = require("../services/mesero.service");
const meseroV_1 = require("../validacion/meseroV");
const swagger_1 = require("@nestjs/swagger");
let controladorMesero = class controladorMesero {
    constructor(servicioMesero) {
        this.servicioMesero = servicioMesero;
    }
    create(validacionMesero) {
        return this.servicioMesero.Crear(validacionMesero);
    }
    findAll() {
        return this.servicioMesero.BuscarTodos();
    }
    findOne(id) {
        return this.servicioMesero.BuscarUno(id);
    }
    update(id, validacionMesero) {
        return this.servicioMesero.Actualizar(id, validacionMesero);
    }
    remove(id) {
        return this.servicioMesero.Eliminar(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Datos ingresados correctamente...' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error al ingresar datos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [meseroV_1.validacionMesero]),
    __metadata("design:returntype", void 0)
], controladorMesero.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta completa de los datos realizada...' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], controladorMesero.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta por ID realizada...' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Error al consultar dato mediante ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], controladorMesero.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Actualización realizada correctamente...' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Error al actualizar dato' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, meseroV_1.validacionMesero]),
    __metadata("design:returntype", void 0)
], controladorMesero.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Eliminación realizada correctamente...' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Error al eliminar dato' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], controladorMesero.prototype, "remove", null);
controladorMesero = __decorate([
    (0, swagger_1.ApiTags)('Documentación de la entidad Mesero'),
    (0, common_1.Controller)('Mesero'),
    __metadata("design:paramtypes", [mesero_service_1.servicioMesero])
], controladorMesero);
exports.controladorMesero = controladorMesero;
//# sourceMappingURL=mesero.controller.js.map