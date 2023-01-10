"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.moduloMesero = void 0;
const common_1 = require("@nestjs/common");
const mesero_service_1 = require("../services/mesero.service");
const mesero_controller_1 = require("../controllers/mesero.controller");
const mongoose_1 = require("@nestjs/mongoose");
const mesero_entity_1 = require("../entities/mesero.entity");
let moduloMesero = class moduloMesero {
};
moduloMesero = __decorate([
    (0, common_1.Module)({
        controllers: [mesero_controller_1.controladorMesero],
        providers: [mesero_service_1.servicioMesero],
        imports: [mongoose_1.MongooseModule.forFeature([{
                    name: mesero_entity_1.Mesero.name,
                    schema: mesero_entity_1.esquemaMesero
                }])]
    })
], moduloMesero);
exports.moduloMesero = moduloMesero;
//# sourceMappingURL=mesero.module.js.map