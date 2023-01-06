"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.indexController = void 0;
const environment_prod_1 = require("../environment/environment.prod");
const axios_1 = __importDefault(require("axios"));
const httpAxios = axios_1.default.create({
    baseURL: environment_prod_1.environment.url
});
class IndexController {
    index(req, res) {
        httpAxios.get(`/lista`).then(response => {
            res.render('index-receta', { recetas: response.data.receta });
        }).catch((error) => {
            console.log(error);
        });
    }
    create(req, res) {
        httpAxios.post('/registrar', {
            nombre: req.body.nombre,
            nIngredientes: req.body.nIngredientes
        }).then(respuesta => {
            res.redirect('/recetas');
        }).catch((error) => {
            console.log(error);
        });
    }
    form(req, res) {
        res.render('create-receta');
    }
    editar(req, res) {
        httpAxios.patch(`/recetaUpdate/${req.params.id}`, {
            nombre: req.body.nombre,
            nIngredientes: req.body.nIngredientes
        }).then(respuesta => {
            res.redirect('/recetas');
        }).catch((error) => {
            console.log(error);
        });
    }
    formEdit(req, res) {
        httpAxios.get(`/ver/${req.params.id}`).then(response => {
            res.render('edit-receta', { receta: response.data.receta });
        }).catch((error) => {
            console.log(error);
        });
    }
    view(req, res) {
        httpAxios.get(`/ver/${req.params.id}`).then(response => {
            res.render('view-receta', { receta: response.data.receta });
        }).catch((error) => {
            console.log(error);
        });
    }
    eliminar(req, res) {
        httpAxios.delete(`/recetaRemove/${req.params.id}`).then(response => {
            res.redirect('/recetas');
        }).catch((error) => {
            console.log(error);
        });
    }
}
exports.indexController = new IndexController();
