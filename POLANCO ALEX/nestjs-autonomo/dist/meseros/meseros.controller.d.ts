import { CreateMeseroDTO } from './dto/meseros.dto';
import { MeserosService } from './meseros.service';
export declare class MeserosController {
    private meseroService;
    constructor(meseroService: MeserosService);
    createMesero(res: any, createMeserosDTO: any): Promise<any>;
    getMeseros(res: any): Promise<any>;
    getMesero(res: any, meseroId: any): Promise<any>;
    deleteMesero(res: any, meseroId: any): Promise<any>;
    updateMesero(res: any, createMeserosDTO: CreateMeseroDTO, meseroId: any): Promise<any>;
}
