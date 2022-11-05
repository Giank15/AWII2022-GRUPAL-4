import { Model } from 'mongoose';
import { Platos } from './interfaces/platos.interface';
import { CreatePlatoDTO } from './dto/platos.dto';
export declare class PlatosService {
    private readonly platoModel;
    constructor(platoModel: Model<Platos>);
    getPlatos(): Promise<Platos[]>;
    getPlato(platoId: number): Promise<Platos>;
    createPlato(createPlatosDto: CreatePlatoDTO): Promise<Platos>;
    deletePlato(platoId: number): Promise<any>;
    updatePlato(platoId: number, createPlatosDto: CreatePlatoDTO): Promise<Platos>;
}
