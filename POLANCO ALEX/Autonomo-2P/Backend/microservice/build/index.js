"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
const dotenv_1 = require("dotenv");
const server_1 = require("./server");
(0, dotenv_1.config)();
const server = new server_1.Server();
server.listen();
