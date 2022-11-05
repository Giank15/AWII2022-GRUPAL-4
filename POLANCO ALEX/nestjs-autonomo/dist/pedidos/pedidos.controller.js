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
exports.PedidosController = void 0;
const common_1 = require("@nestjs/common");
const pedidos_dto_1 = require("./dto/pedidos.dto");
const pedidos_service_1 = require("./pedidos.service");
let PedidosController = class PedidosController {
    constructor(pedidoService) {
        this.pedidoService = pedidoService;
    }
    async createPedido(res, createPedidosDTO) {
        const pedidos = await this.pedidoService.createPedido(createPedidosDTO);
        return res.status(common_1.HttpStatus.OK).json({
            message: "Pedido creado correctamente",
            pedidos
        });
    }
    async getPedidos(res) {
        const pedidos = await this.pedidoService.getPedidos();
        return res.status(common_1.HttpStatus.OK).json({
            pedidos
        });
    }
    async getPedido(res, pedidoId) {
        const pedidos = await this.pedidoService.getPedido(pedidoId);
        if (!pedidos)
            throw new common_1.NotFoundException("El pedido no existe");
        return res.status(common_1.HttpStatus.OK).json({
            pedidos
        });
    }
    async deletePedido(res, pedidoId) {
        const deletePedido = await this.pedidoService.deletePedido(pedidoId);
        if (!deletePedido)
            throw new common_1.NotFoundException("No existe el pedido que desea eliminar");
        return res.status(common_1.HttpStatus.OK).json({
            message: "Pedido eliminado correctamente",
            deletePedido
        });
    }
    async updatePedido(res, createPedidosDTO, pedidoId) {
        const updatePedido = await this.pedidoService.updatePedido(pedidoId, createPedidosDTO);
        if (!updatePedido)
            throw new common_1.NotFoundException("No se encontró el pedido");
        return res.status(common_1.HttpStatus.OK).json({
            message: "pedido actualizado",
            updatePedido
        });
    }
};
__decorate([
    (0, common_1.Post)("/create"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "createPedido", null);
__decorate([
    (0, common_1.Get)("/"),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "getPedidos", null);
__decorate([
    (0, common_1.Get)("/:pedidoid"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Param)("pedidoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "getPedido", null);
__decorate([
    (0, common_1.Delete)("/"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Query)("pedidoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "deletePedido", null);
__decorate([
    (0, common_1.Put)("/update"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Query)("pedidoId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, pedidos_dto_1.CreatePedidoDTO, Object]),
    __metadata("design:returntype", Promise)
], PedidosController.prototype, "updatePedido", null);
PedidosController = __decorate([
    (0, common_1.Controller)('pedidos'),
    __metadata("design:paramtypes", [pedidos_service_1.PedidosService])
], PedidosController);
exports.PedidosController = PedidosController;
//# sourceMappingURL=pedidos.controller.js.map