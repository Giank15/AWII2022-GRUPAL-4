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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidosService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let PedidosService = class PedidosService {
    constructor(pedidoModel) {
        this.pedidoModel = pedidoModel;
    }
    async getPedidos() {
        const pedidos = await this.pedidoModel.find();
        return pedidos;
    }
    async getPedido(pedidoId) {
        const pedidos = await this.pedidoModel.findById(pedidoId);
        return pedidos;
    }
    async createPedido(createPedidosDto) {
        const pedidos = new this.pedidoModel(createPedidosDto);
        return await pedidos.save();
    }
    async deletePedido(pedidoId) {
        const deletePedido = await this.pedidoModel.findByIdAndDelete(pedidoId);
        return deletePedido;
    }
    async updatePedido(pedidoId, createPedidosDto) {
        const updatePedido = await this.pedidoModel.findByIdAndUpdate(pedidoId, createPedidosDto, { new: true });
        return updatePedido;
    }
};
PedidosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)("Pedido")),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_1.Model !== "undefined" && mongoose_1.Model) === "function" ? _a : Object])
], PedidosService);
exports.PedidosService = PedidosService;
//# sourceMappingURL=pedidos.service.js.map