/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Model } from 'mongoose';
import { Cliente } from '../entities/cliente.entity';
import { validacionCliente } from '../validacion/clienteV';
export declare class servicioCliente {
    private readonly modeloCliente;
    constructor(modeloCliente: Model<Cliente>);
    Crear(validacionCliente: validacionCliente): Promise<import("mongoose").Document<unknown, any, Cliente> & Cliente & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    BuscarTodos(): import("mongoose").Query<(import("mongoose").Document<unknown, any, Cliente> & Cliente & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, Cliente> & Cliente & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Cliente>;
    BuscarUno(id: string): Promise<Cliente>;
    Actualizar(id: string, validacionCliente: validacionCliente): Promise<void>;
    Eliminar(id: string): Promise<string>;
}
