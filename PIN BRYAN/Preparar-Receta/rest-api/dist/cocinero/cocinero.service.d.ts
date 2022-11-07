import { Model } from 'mongoose';
import { Cocinero } from './interfaces/cocinero.interface';
import { CocineroDTO } from './dto/cocinero.dto';
export declare class CocineroService {
    readonly cocineroModel: Model<Cocinero>;
    constructor(cocineroModel: Model<Cocinero>);
    crearCocinero(cocineroDTO: CocineroDTO): Promise<Cocinero>;
    obtenerCocineros(): Promise<Cocinero[]>;
    obtenerCocinero(cocineroID: string): Promise<Cocinero>;
    actualizarCocinero(cocineroID: string, cocineroDTO: CocineroDTO): Promise<Cocinero>;
    eliminarCocinero(cocineroID: string): Promise<Cocinero>;
}
