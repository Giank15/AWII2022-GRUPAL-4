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
exports.servicioCliente = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const cliente_entity_1 = require("../entities/cliente.entity");
let servicioCliente = class servicioCliente {
    constructor(modeloCliente) {
        this.modeloCliente = modeloCliente;
    }
    async Crear(validacionCliente) {
        try {
            const Cliente = await this.modeloCliente.create(validacionCliente);
            return Cliente;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error en el proceso de creacion');
        }
    }
    BuscarTodos() {
        const DatosCliente = this.modeloCliente.find();
        return DatosCliente;
    }
    async BuscarUno(id) {
        let Mostar;
        if ((0, mongoose_2.isValidObjectId)(id)) {
            Mostar = await this.modeloCliente.findById(id);
        }
        if (!Mostar) {
            throw new common_1.NotFoundException('El elemento no se encuentra dentro de la Base de Datos');
        }
        return Mostar;
    }
    async Actualizar(id, validacionCliente) {
        try {
            const actualizarCliente = await this.modeloCliente.findById(id);
            await actualizarCliente.updateOne(validacionCliente);
        }
        catch (error) {
            throw new common_1.NotFoundException('El elemento no se encuentra dentro de la Base de Datos');
        }
    }
    async Eliminar(id) {
        try {
            const eliminarCliente = await this.modeloCliente.findById(id);
            await eliminarCliente.deleteOne();
            return "Se ha eliminado con Exito";
        }
        catch (error) {
            throw new common_1.NotFoundException('El elemento no se encuntra dentro de la Base de Datos');
        }
    }
};
servicioCliente = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(cliente_entity_1.Cliente.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], servicioCliente);
exports.servicioCliente = servicioCliente;
//# sourceMappingURL=cliente.service.js.map