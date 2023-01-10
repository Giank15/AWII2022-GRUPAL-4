import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PlatoModule } from './plato/plato.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MeseroModule } from './mesero/mesero.module';
import { PedidoModule } from './pedido/pedido.module';


@Module({
  imports: [MeseroModule, PlatoModule, MongooseModule.forRoot("mongodb+srv://AlexPolanco:alex901227@cluster0.rfywjkj.mongodb.net/test"), PedidoModule],
  controllers: [AppController],
  providers: [AppService ],
})
export class AppModule {}
