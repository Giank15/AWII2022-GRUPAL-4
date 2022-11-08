import { Model } from 'mongoose';
import { Receta } from './interfaces/receta.interface';
import { RecetaDTO } from './dto/receta.dto';
export declare class RecetaService {
    readonly recetaModel: Model<Receta>;
    constructor(recetaModel: Model<Receta>);
    crearReceta(recetaDTO: RecetaDTO): Promise<Receta>;
    obtenerRecetas(): Promise<Receta[]>;
    obtenerReceta(recetaID: string): Promise<Receta>;
    actualizarReceta(recetaID: string, recetaDTO: RecetaDTO): Promise<Receta>;
    eliminarReceta(recetaID: string): Promise<Receta>;
}
