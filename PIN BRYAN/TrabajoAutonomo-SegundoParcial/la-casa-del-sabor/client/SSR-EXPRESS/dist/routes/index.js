"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const receta_1 = require("../controllers/receta");
const router = (0, express_1.Router)();
// PAGINA DE RECETA PRINCIPAL
router.get('/recetas', receta_1.indexController.index);
// RECETA NUEVO
router.get('/recetas/nueva', receta_1.indexController.form);
router.post('/recetas/nueva', receta_1.indexController.create);
// EDITAR RECETA
router.get('/recetas/editar/:id', receta_1.indexController.formEdit);
router.post('/recetas/editar/:id', receta_1.indexController.editar);
//VER RECETA
router.get('/recetas/view/:id', receta_1.indexController.view);
// ELIMINAR RECETA
router.get('/recetas/eliminar/:id', receta_1.indexController.eliminar);
exports.default = router;
