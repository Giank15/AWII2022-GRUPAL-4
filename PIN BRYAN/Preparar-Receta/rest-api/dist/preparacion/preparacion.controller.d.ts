import { PreparacionDTO } from './dto/preparacion.dto';
import { PreparacionService } from './preparacion.service';
export declare class PreparacionController {
    private preparacionService;
    constructor(preparacionService: PreparacionService);
    nuevaPreparacion(res: any, preparacionDTO: PreparacionDTO): Promise<any>;
    getPreparaciones(res: any): Promise<any>;
    getPreparacion(res: any, preparacionID: any): Promise<any>;
    putPreparacion(res: any, preparacionID: any, preparacionDTO: PreparacionDTO): Promise<any>;
    deletePreparacion(res: any, preparacionID: any): Promise<any>;
}
