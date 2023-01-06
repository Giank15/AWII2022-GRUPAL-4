import { Request, Response } from "express";
import {IReceta} from "../interfaces/receta.interface";
import {Receta} from "../models/receta.model";

export const createReceta = async(req : Request, res : Response) => {

    const data = req.body as IReceta;

    const receta = new Receta();

    receta.nombre = data.nombre;
    receta.nIngredientes = data.nIngredientes;

    receta.save((err, receta_save) => {

        if(receta_save) {

            res.status(200).send({message: 'Receta Creada Correctamente' , receta: receta_save})

        } else {

            res.status(500).send(err)

        }

    });

}

export const findAllRecetas = async (req : Request, res : Response) => {

    Receta.find((err, receta_data) => {

        if (receta_data) {

            res.status(200).send({ receta: receta_data })

        } else {

            res.status(403).send({ message: 'No existe la receta en el sistema' })

        }
    }).clone().catch(function(err){ console.log(err)})
}

export const FindByIdReceta = async (req : Request, res : Response) => {

    const id = req.params['id'];

    await Receta.findById(id, (err : Error , receta_data : IReceta) => {
        if (receta_data) {
            res.status(200).send({ receta: receta_data })
        }else{
            res.status(403).send({ message: 'No existe la receta en el sistema' })
        }
    }).clone().catch(function(err){ console.log(err)})
}

export const patchReceta = async (req : Request, res : Response) => {

    const id = req.params['id'];
    const data = req.body;

    Receta.findByIdAndUpdate(id, {
        nombre : data.nombre,
        nIngredientes : data.nIngredientes

    }, (err, receta_edit) => {

        if (receta_edit) {

            res.status(200).send({ receta: receta_edit, });

        } else {

            res.status(500).send(err)

        }

    }).clone().catch(function(err){ console.log(err)})

}

export const removeReceta = async (req : Request, res : Response) => {

    const id = req.params['id'];

    Receta.findByIdAndRemove(id, (err : Error, receta_eliminado : IReceta) => {

        if (receta_eliminado) {

            res.status(200).send({ receta: receta_eliminado });

        } else {

            res.status(500).send({message: 'No se puede eliminar la receta en el sistema' , err})

        }

    })

}