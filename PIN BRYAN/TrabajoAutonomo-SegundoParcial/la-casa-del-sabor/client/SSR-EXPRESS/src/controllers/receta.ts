import { Request, Response } from "express";
import {environment} from "../environment/environment.prod"
import axios from "axios";

const httpAxios = axios.create({
    baseURL: environment.url
})

class IndexController {

    public index(req : Request, res : Response){
        httpAxios.get(`/lista`).then(response => {            
            res.render('index-receta', {recetas : response.data.receta})
        }).catch((error) => {
            console.log(error);
            
        })
    }

    public create(req: Request, res: Response){
        httpAxios.post('/registrar', {
            nombre: req.body.nombre,
            nIngredientes: req.body.nIngredientes
        }).then(respuesta => {            
            res.redirect('/recetas')
        }).catch((error) => {
            console.log(error);
        })
    }

    public form(req: Request, res: Response){
        res.render('create-receta')
    }

    public editar(req: Request, res: Response){
        httpAxios.patch(`/recetaUpdate/${req.params.id}`, {
            nombre: req.body.nombre,
            nIngredientes: req.body.nIngredientes
        }).then(respuesta => {            
            res.redirect('/recetas')
        }).catch((error) => {
            console.log(error);
        })
    }

    public formEdit(req: Request, res: Response){
        httpAxios.get(`/ver/${req.params.id}`).then(response => {             
            res.render('edit-receta', {receta : response.data.receta})  
        }).catch((error) => {
            console.log(error);            
        })
    }

    public view(req: Request, res: Response){
        
        httpAxios.get(`/ver/${req.params.id}`).then(response => {             
            res.render('view-receta', {receta : response.data.receta})
        }).catch((error) => {
            console.log(error);
            
        })
    }
    
    public eliminar(req: Request, res: Response){
        
        httpAxios.delete(`/recetaRemove/${req.params.id}`).then(response => {             
            res.redirect('/recetas')
        }).catch((error) => {
            console.log(error);
            
        })
    }

}

export const indexController = new IndexController();