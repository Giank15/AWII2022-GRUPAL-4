"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PreparacionModule = void 0;
const common_1 = require("@nestjs/common");
const preparacion_service_1 = require("./preparacion.service");
const preparacion_controller_1 = require("./preparacion.controller");
const preparacion_schema_1 = require("./schemas/preparacion.schema");
const mongoose_1 = require("@nestjs/mongoose");
let PreparacionModule = class PreparacionModule {
};
PreparacionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'Preparacion', schema: preparacion_schema_1.PreparacionSchema },
            ]),
        ],
        providers: [preparacion_service_1.PreparacionService],
        controllers: [preparacion_controller_1.PreparacionController]
    })
], PreparacionModule);
exports.PreparacionModule = PreparacionModule;
//# sourceMappingURL=preparacion.module.js.map