/*import express from 'express';
const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req,res)=>{
    console.log('someone pinged');
    res.send('pongi');
})

app.listen(PORT, ()=>{
    console.log(`Server running in ${PORT}`)
})*/
import {config} from 'dotenv';
import { Server } from './server';
config();
const server = new Server();
server.listen();
