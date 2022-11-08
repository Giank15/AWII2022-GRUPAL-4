import { Model } from 'mongoose';
import { Preparacion } from './interfaces/preparacion.interface';
import { PreparacionDTO } from './dto/preparacion.dto';
export declare class PreparacionService {
    readonly preparacionModel: Model<Preparacion>;
    constructor(preparacionModel: Model<Preparacion>);
    crearPreparacion(preparacionDTO: PreparacionDTO): Promise<Preparacion>;
    obtenerPreparaciones(): Promise<Preparacion[]>;
    obtenerPreparacion(preparacionID: string): Promise<Preparacion>;
    actualizarpreparacion(preparacionID: string, preparacionDTO: PreparacionDTO): Promise<Preparacion>;
    eliminarPreparacion(preparacionID: string): Promise<Preparacion>;
}
