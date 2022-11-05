"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlatosModule = void 0;
const common_1 = require("@nestjs/common");
const platos_controller_1 = require("./platos.controller");
const platos_service_1 = require("./platos.service");
const mongoose_1 = require("@nestjs/mongoose");
const platos_schemas_1 = require("./schemas/platos.schemas");
let PlatosModule = class PlatosModule {
};
PlatosModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: "Plato", schema: platos_schemas_1.platoSchema }
            ])],
        controllers: [platos_controller_1.PlatosController],
        providers: [platos_service_1.PlatosService]
    })
], PlatosModule);
exports.PlatosModule = PlatosModule;
//# sourceMappingURL=platos.module.js.map