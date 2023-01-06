import mongoose, { Mongoose } from "mongoose";
import { IReceta } from "../interfaces/receta.interface";
const { Schema, model } = mongoose;

const RecetaSchema : mongoose.Schema = new Schema<IReceta>({
	nombre: {
		type: String,
		required: [true, 'El nombre de la receta es obligatorio']
	},

    nIngredientes: {
		type: String,
		required: [true, 'Los ingredientes de la receta son obligatorio']
	}
	
});

export const Receta = mongoose.model<IReceta>('Receta', RecetaSchema);
