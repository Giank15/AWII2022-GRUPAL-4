import mongoose from 'mongoose';
export declare const PreparacionSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any>, {}, {}, {}, {}, "type", {
    fecha?: string;
    hora?: string;
    cantidad?: number;
    costo?: number;
    tiempo?: string;
    idreceta?: mongoose.Types.ObjectId;
    idmesero?: mongoose.Types.ObjectId;
}>;
