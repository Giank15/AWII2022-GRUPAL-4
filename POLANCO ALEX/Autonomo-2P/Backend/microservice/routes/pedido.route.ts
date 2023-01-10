import { Router } from "express";
import { createPedido, 
        getAllPedidos, 
        getPedido, 
        updatePedido, 
        deletePedido } from "../controllers/pedido.controller";
    
export const api = Router();

api.post('/crear', createPedido);
api.get('/datos', getAllPedidos);
api.get('/ver/:id', getPedido);
api.put('/pacienteUpdate/:id', updatePedido);
api.delete('/deletePaciente/:id', deletePedido);