import { config } from "dotenv";
import { Servidor } from './server';

config();
const servidor = new Servidor();
servidor.listen();