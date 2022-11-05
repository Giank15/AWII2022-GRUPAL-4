import { Model } from 'mongoose';
import { Meseros } from './interfaces/meseros.interface';
import { CreateMeseroDTO } from './dto/meseros.dto';
export declare class MeserosService {
    private readonly meseroModel;
    constructor(meseroModel: Model<Meseros>);
    getMeseros(): Promise<Meseros[]>;
    getMesero(meseroId: number): Promise<Meseros>;
    createMesero(createMeserosDTO: CreateMeseroDTO): Promise<Meseros>;
    deleteMesero(meseroId: number): Promise<Meseros>;
    updateMesero(meseroId: number, createMeserosDto: CreateMeseroDTO): Promise<Meseros>;
}
