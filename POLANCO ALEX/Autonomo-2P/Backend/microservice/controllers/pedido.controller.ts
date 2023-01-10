import { Request, Response } from "express";
import { IPedidos } from "../interfaces/pedido.interface";
import { Pedido } from "../models/pedido.model";

export const createPedido = async(req: Request, res:Response)=>{
    const data = req.body as IPedidos;

    const pedido = new Pedido();

    pedido.id = data.id;
    pedido.id_mesero = data.id_mesero;
    pedido.id_plato = data.id_plato;
    pedido.fecha = data.fecha;
    pedido.mesa = data.mesa;
    pedido.cantidad = data.cantidad;
    pedido.precio = data.mesa;
     
    pedido.save((err, pedido_save)=>{
        if (pedido_save) {
            res.status(200).send({message: 'Pedido creado correctamente', pedido: pedido_save});
        }else{
            res.status(500).send(err);
        }
    })
}

export const getAllPedidos = async (_req: Request, res: Response)=>{
    Pedido.find((err, pedido_data)=>{
        if (pedido_data) {
            res.status(200).send({pedido: pedido_data});
        } else {
            res.status(403).send({message: 'No existen pedidos', err});
        }
    }).clone().catch(function(err){console.log(err)})
}

export const getPedido = async (req: Request, res: Response)=>{
    const id = req.params['id'];
    await Pedido.findById(id, (err: Error, pedido_data: IPedidos)=>{
        if (pedido_data) {
            res.status(200).send({pedido: pedido_data})
        } else {
            res.status(403).send({message: 'No existe el pedido especificado', err});
        }
    }).clone().catch(function(err){console.log(err)})
}

export const updatePedido = async (req: Request, res: Response)=>{
    const id = req.params['id'];
    const data = req.body;

    Pedido.findByIdAndUpdate(id, {
        id: data.id,
        idmesero: data.idmesero,
        idplato: data.idplato,
        fecha: data.fecha,
        mesa: data.mesa,
        cantidad : data.mesa,
        precio: data.precio
    },(err, pedido_edit)=>{
        if (pedido_edit) {
            res.status(200).send({pedido: pedido_edit})
        } else {
            res.status(500).send(err)
        }
    }).clone().catch(function(err){ console.log(err)})
}
 export const deletePedido = async (req: Request, res: Response)=>{
    const id = req.params['id'];

    Pedido.findByIdAndDelete(id, (err : Error, pedido_eliminado: IPedidos)=>{
        if (pedido_eliminado) {
            res.status(200).send({pedido_eliminado})
        } else {
            res.status(500).send({message: 'No se puedo eliminar el pedido', err})
        }
    })
 }
