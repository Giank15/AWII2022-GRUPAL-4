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
import { Propina } from '../entities/propina.entity';
import { validacionPropina } from '../validacion/propinaV';
export declare class servicioPropina {
    private readonly modeloPropina;
    constructor(modeloPropina: Model<Propina>);
    Crear(validacionPropina: validacionPropina): Promise<import("mongoose").Document<unknown, any, Propina> & Propina & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    BuscarTodos(): import("mongoose").Query<(import("mongoose").Document<unknown, any, Propina> & Propina & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, Propina> & Propina & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, Propina>;
    BuscarUno(id: string): Promise<Propina>;
    Actualizar(id: string, validacionPropina: validacionPropina): Promise<void>;
    Eliminar(id: string): Promise<string>;
}
