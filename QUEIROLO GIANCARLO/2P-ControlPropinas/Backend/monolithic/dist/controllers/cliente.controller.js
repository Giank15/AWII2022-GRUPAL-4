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
exports.controladorCliente = void 0;
const common_1 = require("@nestjs/common");
const cliente_service_1 = require("../services/cliente.service");
const clienteV_1 = require("../validacion/clienteV");
const swagger_1 = require("@nestjs/swagger");
let controladorCliente = class controladorCliente {
    constructor(servicioCliente) {
        this.servicioCliente = servicioCliente;
    }
    create(validacionCliente) {
        return this.servicioCliente.Crear(validacionCliente);
    }
    findAll() {
        return this.servicioCliente.BuscarTodos();
    }
    findOne(id) {
        return this.servicioCliente.BuscarUno(id);
    }
    update(id, validacionCliente) {
        return this.servicioCliente.Actualizar(id, validacionCliente);
    }
    remove(id) {
        return this.servicioCliente.Eliminar(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Datos ingresados correctamente...' }),
    (0, swagger_1.ApiResponse)({ status: 500, description: 'Error al ingresar datos' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [clienteV_1.validacionCliente]),
    __metadata("design:returntype", void 0)
], controladorCliente.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta completa de los datos realizada...' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], controladorCliente.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Consulta por ID realizada...' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Error al consultar dato mediante ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], controladorCliente.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Actualización realizada correctamente...' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Error al actualizar dato' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, clienteV_1.validacionCliente]),
    __metadata("design:returntype", void 0)
], controladorCliente.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Eliminación realizada correctamente...' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Error al eliminar dato' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], controladorCliente.prototype, "remove", null);
controladorCliente = __decorate([
    (0, swagger_1.ApiTags)('Documentación de la entidad Cliente'),
    (0, common_1.Controller)('Cliente'),
    __metadata("design:paramtypes", [cliente_service_1.servicioCliente])
], controladorCliente);
exports.controladorCliente = controladorCliente;
//# sourceMappingURL=cliente.controller.js.map