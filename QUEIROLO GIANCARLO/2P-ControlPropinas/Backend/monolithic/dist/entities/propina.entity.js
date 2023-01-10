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
Object.defineProperty(exports, "__esModule", { value: true });
exports.esquemaPropina = exports.Propina = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const swagger_1 = require("@nestjs/swagger");
const cliente_entity_1 = require("../entities/cliente.entity");
const mesero_entity_1 = require("../entities/mesero.entity");
const mongoose = require("mongoose");
let Propina = class Propina {
};
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Propina.prototype, "fechaPropina", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Propina.prototype, "horaPropina", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Propina.prototype, "valorPropina", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' }),
    __metadata("design:type", cliente_entity_1.Cliente)
], Propina.prototype, "idCliente", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, mongoose_1.Prop)({ type: mongoose.Schema.Types.ObjectId, ref: 'Mesero' }),
    __metadata("design:type", mesero_entity_1.Mesero)
], Propina.prototype, "idMesero", void 0);
Propina = __decorate([
    (0, mongoose_1.Schema)()
], Propina);
exports.Propina = Propina;
exports.esquemaPropina = mongoose_1.SchemaFactory.createForClass(Propina);
//# sourceMappingURL=propina.entity.js.map