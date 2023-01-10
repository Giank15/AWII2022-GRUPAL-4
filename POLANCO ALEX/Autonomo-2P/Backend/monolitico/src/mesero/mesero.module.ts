import { Module } from '@nestjs/common';
import { MeseroController } from './mesero.controller';
import { MeseroService } from './mesero.service';
import {MongooseModule} from "@nestjs/mongoose"
import {meseroSchema} from "./schema/mesero.schema"

@Module({
  imports:[MongooseModule.forFeature([
    {name:"Mesero",schema:meseroSchema }
  ])],
  controllers: [MeseroController],
  providers: [MeseroService]
})
export class MeseroModule {}
