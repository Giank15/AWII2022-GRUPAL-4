"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduloCliente = void 0;
const common_1 = require("@nestjs/common");
const cliente_service_1 = require("../services/cliente.service");
const cliente_controller_1 = require("../controllers/cliente.controller");
const mongoose_1 = require("@nestjs/mongoose");
const cliente_entity_1 = require("../entities/cliente.entity");
let moduloCliente = class moduloCliente {
};
moduloCliente = __decorate([
    (0, common_1.Module)({
        controllers: [cliente_controller_1.controladorCliente],
        providers: [cliente_service_1.servicioCliente],
        imports: [
            mongoose_1.MongooseModule.forFeature([{
                    name: cliente_entity_1.Cliente.name,
                    schema: cliente_entity_1.esquemaCliente
                }])
        ]
    })
], moduloCliente);
exports.moduloCliente = moduloCliente;
//# sourceMappingURL=cliente.module.js.map