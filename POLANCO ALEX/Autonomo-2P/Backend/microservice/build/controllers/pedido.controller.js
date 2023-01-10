"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePedido = exports.updatePedido = exports.getPedido = exports.getAllPedidos = exports.createPedido = void 0;
const pedido_model_1 = require("../models/pedido.model");
const createPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    const pedido = new pedido_model_1.Paciente();
    pedido.id = data.id;
    pedido.idmesero = data.idmesero;
    pedido.idplato = data.idplato;
    pedido.fecha = data.fecha;
    pedido.cantidad = data.cantidad;
    pedido.precio = data.precio; 
    pedido.save((err, pedido_save) => {
        if (pedido_save) {
            res.status(200).send({ message: 'Pedido creado correctamente', pedido: pedido_save });
        }
        else {
            res.status(500).send(err);
        }
    });
});
exports.createPedido = createPedido;
const getAllPedidos = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    pedido_model_1.Pedido.find((err, pedido_data) => {
        if (pedido_data) {
            res.status(200).send({ pedido: pedido_data });
        }
        else {
            res.status(403).send({ message: 'No existen registros', err });
        }
    }).clone().catch(function (err) { console.log(err); });
});
exports.getAllPedidos = getAllPedidos;
const getPedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    yield pedido_model_1.Pedido.findById(id, (err, pedido_data) => {
        if (pedido_data) {
            res.status(200).send({ pedido: pedido_data });
        }
        else {
            res.status(403).send({ message: 'No existe el pedido especificado', err });
        }
    }).clone().catch(function (err) { console.log(err); });
});
exports.getPedido = getPedido;
const updatePedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    const data = req.body;
    pedido_model_1.Pedido.findByIdAndUpdate(id, {
        id: data.id,
        idmesero: data.idmesero,
        idplato: data.idplato,
        fecha: data.fecha,
        mesa: data.mesa,
        cantidad: data.cantidad,
        precio: data.cantidad


    }, (err, pedido_edit) => {
        if (pedido_edit) {
            res.status(200).send({ pedido: pedido_edit });
        }
        else {
            res.status(500).send(err);
        }
    }).clone().catch(function (err) { console.log(err); });
});
exports.updatePedido = updatePedido;
const deletePedido = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params['id'];
    pedido_model_1.Pedido.findByIdAndDelete(id, (err, pedido_eliminado) => {
        if (pedido_eliminado) {
            res.status(200).send({ pedido_eliminado });
        }
        else {
            res.status(500).send({ message: 'No se puedo eliminar el pedido', err });
        }
    });
});
exports.deletePedido = deletePedido;
