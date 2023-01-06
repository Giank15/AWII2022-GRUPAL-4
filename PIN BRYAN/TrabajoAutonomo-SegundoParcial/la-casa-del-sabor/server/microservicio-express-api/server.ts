import express, { Router, Express} from "express";
import cors from 'cors';
import {api as receta} from './routes/receta.route';
import { dbConexion } from "./database/db";

export class Servidor {

    app: Router;
    router: Router;
    port: Number;
    paths: { [pass: string]: string };

    private _express: Express;

    constructor() {

        this.app = Router();
        this.router = Router();
        this.port = Number(process.env.PORT || 3200);

        //TODO RUTA
        this.paths = {
            receta: '/receta'
        }

        //TODO LLAMADA A METODOS
        this.conexionDB();
        this.middleware();
        this.routes();
        this.router.use('/', this.app); //TODO RUTA GENERAL DEL MICROSERVICIO
        this._express = express().use(this.router);

    }

    //TODO METODO PARA CONEXION DE BD
    private async conexionDB() {
        await dbConexion();
    }

    //TODO MIDDLEWARE PARA USO DEL CORS
    private middleware() {
        this.app.use(cors());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
    }


    //TODO METODO PARA USO DE RUTAS
    private routes(){
        this.app.use(this.paths.receta, receta)
    }


    //TODO CONFIGURACION DE PUERTO POR DONDE CORRERA EL SERVIDOR
    listen(){
        this._express.listen(this.port, () => {
            
            console.clear();
            console.log('Bienvenido al Microservicio de Recetas Especiales');
            console.log("************************************************* \n");            
            console.log(`Servidor corriendo en: http://localhost:${this.port}/receta`);
            console.log("******************************************************************************** \n");
            console.log("CONEXIÓN DEL SERVIDOR CORRECTA");
            console.log("****************************** \n");
        })
    }

}