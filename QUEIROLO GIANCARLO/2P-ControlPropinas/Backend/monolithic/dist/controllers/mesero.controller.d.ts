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
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { servicioMesero } from '../services/mesero.service';
import { validacionMesero } from '../validacion/meseroV';
export declare class controladorMesero {
    private readonly servicioMesero;
    constructor(servicioMesero: servicioMesero);
    create(validacionMesero: validacionMesero): Promise<import("mongoose").Document<unknown, any, import("../entities/mesero.entity").Mesero> & import("../entities/mesero.entity").Mesero & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    findAll(): import("mongoose").Query<(import("mongoose").Document<unknown, any, import("../entities/mesero.entity").Mesero> & import("../entities/mesero.entity").Mesero & {
        _id: import("mongoose").Types.ObjectId;
    })[], import("mongoose").Document<unknown, any, import("../entities/mesero.entity").Mesero> & import("../entities/mesero.entity").Mesero & {
        _id: import("mongoose").Types.ObjectId;
    }, {}, import("../entities/mesero.entity").Mesero>;
    findOne(id: string): Promise<import("../entities/mesero.entity").Mesero>;
    update(id: string, validacionMesero: validacionMesero): Promise<void>;
    remove(id: string): Promise<string>;
}
