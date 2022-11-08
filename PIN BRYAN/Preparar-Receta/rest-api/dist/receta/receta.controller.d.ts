import { RecetaDTO } from './dto/receta.dto';
import { RecetaService } from './receta.service';
export declare class RecetaController {
    private recetaService;
    constructor(recetaService: RecetaService);
    nuevaReceta(res: any, recetaDTO: RecetaDTO): Promise<any>;
    getRecetas(res: any): Promise<any>;
    getReceta(res: any, recetaID: any): Promise<any>;
    putReceta(res: any, recetaID: any, recetaDTO: RecetaDTO): Promise<any>;
    deleteReceta(res: any, recetaID: any): Promise<any>;
}
