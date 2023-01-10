import { Cliente } from '../entities/cliente.entity';
import { Mesero } from '../entities/mesero.entity';
import * as mongoose from 'mongoose';
export declare class Propina {
    fechaPropina: String;
    horaPropina: String;
    valorPropina: String;
    idCliente: Cliente;
    idMesero: Mesero;
}
export declare const esquemaPropina: mongoose.Schema<Propina, mongoose.Model<Propina, any, any, any, any>, {}, {}, {}, {}, "type", Propina>;
