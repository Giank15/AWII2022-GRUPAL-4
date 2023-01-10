import mongoose, {connect} from "mongoose";

export const dbConnection = async()=>{
    try {
        const url = process.env.DB_MONGO;
        mongoose.set("strictQuery",false);

        await connect(url || '');
        console.log("Database is connected!")
    } catch (error) {
        console.log(error);
        throw new Error("La base de datos no esta disponible");
    }
}