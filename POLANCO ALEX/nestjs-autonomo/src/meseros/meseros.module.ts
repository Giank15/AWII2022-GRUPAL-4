import { Module } from '@nestjs/common';
import { MeserosController } from './meseros.controller';
import { MeserosService } from './meseros.service';
import { MongooseModule } from '@nestjs/mongoose';
import { meserosSchema } from './schemas/meseros.schemas';

@Module({
  imports:[MongooseModule.forFeature([
    {name:"Mesero", schema:meserosSchema}
  ])],
  controllers: [MeserosController],
  providers: [MeserosService]
})
export class MeserosModule {}
