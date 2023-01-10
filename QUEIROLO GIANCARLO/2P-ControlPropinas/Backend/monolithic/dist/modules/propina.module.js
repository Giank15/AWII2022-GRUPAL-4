"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduloPropina = void 0;
const common_1 = require("@nestjs/common");
const propina_service_1 = require("../services/propina.service");
const propina_controller_1 = require("../controllers/propina.controller");
const mongoose_1 = require("@nestjs/mongoose");
const propina_entity_1 = require("../entities/propina.entity");
let moduloPropina = class moduloPropina {
};
moduloPropina = __decorate([
    (0, common_1.Module)({
        controllers: [propina_controller_1.controladorPropina],
        providers: [propina_service_1.servicioPropina],
        imports: [mongoose_1.MongooseModule.forFeature([{
                    name: propina_entity_1.Propina.name,
                    schema: propina_entity_1.esquemaPropina
                }])]
    })
], moduloPropina);
exports.moduloPropina = moduloPropina;
//# sourceMappingURL=propina.module.js.map