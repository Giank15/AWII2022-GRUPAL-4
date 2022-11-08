import { Module } from '@nestjs/common';
import { servicioCliente } from '../services/cliente.service';
import { controladorCliente } from '../controllers/cliente.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Cliente, esquemaCliente } from '../entities/cliente.entity';

@Module({
    controllers: [controladorCliente],
    providers: [servicioCliente],
    imports: [
        MongooseModule.forFeature([{
            name: Cliente.name,
            schema: esquemaCliente
        }])
    ]
})
export class moduloCliente {}