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
exports.servicioMesero = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const mesero_entity_1 = require("../entities/mesero.entity");
let servicioMesero = class servicioMesero {
    constructor(modeloMesero) {
        this.modeloMesero = modeloMesero;
    }
    async Crear(validacionMesero) {
        try {
            const Mesero = await this.modeloMesero.create(validacionMesero);
            return Mesero;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error en el proceso de creacion');
        }
    }
    BuscarTodos() {
        const datosMesero = this.modeloMesero.find();
        return datosMesero;
    }
    async BuscarUno(id) {
        let Mostar;
        if ((0, mongoose_2.isValidObjectId)(id)) {
            Mostar = await this.modeloMesero.findById(id);
        }
        if (!Mostar) {
            throw new common_1.NotFoundException('El elemento no se encuentra dentro de la Base de Datos');
        }
        return Mostar;
    }
    async Actualizar(id, validacionMesero) {
        try {
            const actualizarMesero = await this.modeloMesero.findById(id);
            await actualizarMesero.updateOne(validacionMesero);
        }
        catch (error) {
            throw new common_1.NotFoundException('El elemento no se encuentra dentro de la Base de Datos');
        }
    }
    async Eliminar(id) {
        try {
            const eliminarMesero = await this.modeloMesero.findById(id);
            await eliminarMesero.deleteOne();
            return "Se ha eliminado con Exito";
        }
        catch (error) {
            throw new common_1.NotFoundException('El elemento no se encuntra dentro de la Base de Datos');
        }
    }
};
servicioMesero = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(mesero_entity_1.Mesero.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], servicioMesero);
exports.servicioMesero = servicioMesero;
//# sourceMappingURL=mesero.service.js.map