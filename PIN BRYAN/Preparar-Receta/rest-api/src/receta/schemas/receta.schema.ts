import { Schema } from 'mongoose';

export const RecetaSchema = new Schema({
    nombre: {
        type: String,
        require: true,
      },
      ingredientesCant: {
        type: String,
        require: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
});