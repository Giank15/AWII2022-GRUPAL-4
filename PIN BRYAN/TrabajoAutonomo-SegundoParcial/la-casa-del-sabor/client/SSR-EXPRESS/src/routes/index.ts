import {Router} from 'express';
import {indexController} from '../controllers/receta'

const router : Router = Router();

// PAGINA DE RECETA PRINCIPAL
router.get('/recetas', indexController.index)

// RECETA NUEVO
router.get('/recetas/nueva', indexController.form)
router.post('/recetas/nueva', indexController.create)

// EDITAR RECETA
router.get('/recetas/editar/:id', indexController.formEdit)
router.post('/recetas/editar/:id', indexController.editar)

//VER RECETA
router.get('/recetas/view/:id', indexController.view)

// ELIMINAR RECETA
router.get('/recetas/eliminar/:id', indexController.eliminar)


export default router