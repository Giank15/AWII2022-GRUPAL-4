import { Schema } from 'mongoose';

export const CocineroSchema = new Schema({
  nombre: {
    type: String,
    require: true,
  },
  sueldo: {
    type: Number,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});