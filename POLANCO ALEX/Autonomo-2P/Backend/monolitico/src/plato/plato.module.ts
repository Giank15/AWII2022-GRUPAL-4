import { Module } from '@nestjs/common';
import { PlatoController } from './plato.controller';
import { PlatoService } from './plato.service';
import {MongooseModule} from "@nestjs/mongoose"
import {platoSchema} from "./schema/plato.schema"

@Module({
  imports:[MongooseModule.forFeature([
    {name:"Plato", schema:platoSchema}
  ])],
  controllers: [PlatoController],
  providers: [PlatoService]
})
export class PlatoModule {}
