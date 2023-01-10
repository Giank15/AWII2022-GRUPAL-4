import { Module } from '@nestjs/common';
import { servicioPropina } from '../services/propina.service';
import { controladorPropina } from '../controllers/propina.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Propina, esquemaPropina } from '../entities/propina.entity';

@Module({
    controllers: [controladorPropina],
    providers: [servicioPropina],
    imports: [MongooseModule.forFeature([{
        name: Propina.name,
        schema: esquemaPropina
    }])]
})
export class moduloPropina{}