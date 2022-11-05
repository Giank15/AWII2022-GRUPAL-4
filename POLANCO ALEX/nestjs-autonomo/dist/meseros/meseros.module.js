"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeserosModule = void 0;
const common_1 = require("@nestjs/common");
const meseros_controller_1 = require("./meseros.controller");
const meseros_service_1 = require("./meseros.service");
const mongoose_1 = require("@nestjs/mongoose");
const meseros_schemas_1 = require("./schemas/meseros.schemas");
let MeserosModule = class MeserosModule {
};
MeserosModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeature([
                { name: "Mesero", schema: meseros_schemas_1.meserosSchema }
            ])],
        controllers: [meseros_controller_1.MeserosController],
        providers: [meseros_service_1.MeserosService]
    })
], MeserosModule);
exports.MeserosModule = MeserosModule;
//# sourceMappingURL=meseros.module.js.map