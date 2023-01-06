import mongoose, { connect } from "mongoose";

export const dbConexion = async () => {
    
    try{

        const url = process.env.DB_MONGO;

        mongoose.set("strictQuery", false);

        await connect(url || '');
        console.log("Base de datos del microservicio conectada correctamente!");
        console.log("********************************************************");

    } catch(error) {
        console.log(error);
        throw new Error(`La base de datos no esta disponble`)  
    }

}