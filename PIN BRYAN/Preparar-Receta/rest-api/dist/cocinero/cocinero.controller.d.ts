import { CocineroDTO } from './dto/cocinero.dto';
import { CocineroService } from './cocinero.service';
export declare class CocineroController {
    private cocineroService;
    constructor(cocineroService: CocineroService);
    nuevoCocinero(res: any, cocineroDTO: CocineroDTO): Promise<any>;
    getCocineros(res: any): Promise<any>;
    getCocinero(res: any, cocineroID: any): Promise<any>;
    putCocinero(res: any, cocineroID: any, cocineroDTO: CocineroDTO): Promise<any>;
    deleteCocinero(res: any, cocineroID: any): Promise<any>;
}
