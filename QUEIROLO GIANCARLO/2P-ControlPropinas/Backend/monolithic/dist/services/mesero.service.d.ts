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
import { Mesero } from '../entities/mesero.entity';
import { validacionMesero } from '../validacion/meseroV';
export declare class servicioMesero {
    private readonly modeloMesero;
    constructor(modeloMesero: Model<Mesero>);
    Crear(validacionMesero: validacionMesero): Promise<import("mongoose").Document<unknown, any, Mesero> & Mesero & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    BuscarTodos(): import("mongoose").Query<(import("mongoose").Document<unknown, any, Mesero> & Mesero & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, Mesero> & Mesero & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Mesero>;
    BuscarUno(id: string): Promise<Mesero>;
    Actualizar(id: string, validacionMesero: validacionMesero): Promise<void>;
    Eliminar(id: string): Promise<string>;
}
