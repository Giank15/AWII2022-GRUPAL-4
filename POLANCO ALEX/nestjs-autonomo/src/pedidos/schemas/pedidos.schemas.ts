//Importamos un esquema de datos
import { Schema} from 'mongoose'
export const pedidosSchema=new Schema({
    id:Number, 
    ID_plato:[{
        type: Schema.Types.ObjectId,
        ref:"Platos" 
    }],
    ID_mesero:[{
        type: Schema.Types.ObjectId,
        ref:"Meseros" 
    }],
    Fecha:{
        type:Date,
        default:Date.now
    },
    mesa:Number,
    cantidad:Number,
    precio:Number
})