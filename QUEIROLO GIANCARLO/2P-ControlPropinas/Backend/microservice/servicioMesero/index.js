const server = require("./src/app");
require('dotenv').config();
const  mongoose =  require('mongoose');

const dbConnection = async ()=>{
    try{
        await mongoose.connect(process.env.connectionURL, ()=> {
            console.log('Base de datos escuchando')
        })
    }
    catch(error){
        console.log(error);
        throw new Error('Error al conectarse con la base de datos');
    }
}

dbConnection();

server.listen(process.env.PORT, ()=>{
    console.log(`Servicio de Mesero iniciando... `)
})