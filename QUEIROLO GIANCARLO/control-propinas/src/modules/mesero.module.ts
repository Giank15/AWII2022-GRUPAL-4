import { Module } from '@nestjs/common';
import { servicioMesero } from '../services/mesero.service';
import { controladorMesero } from '../controllers/mesero.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Mesero, esquemaMesero } from '../entities/mesero.entity';

@Module({
    controllers: [controladorMesero],
    providers: [servicioMesero],
    imports: [MongooseModule.forFeature([{
        name: Mesero.name,
        schema: esquemaMesero
    }])]
})
export class moduloMesero {}