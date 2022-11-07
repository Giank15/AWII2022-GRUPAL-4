import mongoose, { Schema } from 'mongoose';

export const PreparacionSchema = new Schema({
  fecha: {
    type: String,
    require: true,
  },
  hora: {
    type: String,
    require: true,
  },
  cantidad: {
    type: Number,
    require: true,
  },
  costo: {
    type: Number,
    require: true,
  },
  tiempo: {
    type: String,
    require: true,
  },
  idreceta: { type: mongoose.Schema.Types.ObjectId, ref: 'Receta' },
  idmesero: {type: mongoose.Schema.Types.ObjectId, ref: 'Cocinero' }
});