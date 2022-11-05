import { CreatePlatoDTO } from './dto/platos.dto';
import { PlatosService } from './platos.service';
export declare class PlatosController {
    private platoService;
    constructor(platoService: PlatosService);
    createPlato(res: any, createPlatosDTO: any): Promise<any>;
    getPlatos(res: any): Promise<any>;
    getPlato(res: any, platoId: any): Promise<any>;
    deletePlato(res: any, platoId: any): Promise<any>;
    updatePlato(res: any, createPlatosDTO: CreatePlatoDTO, platoId: any): Promise<any>;
}
