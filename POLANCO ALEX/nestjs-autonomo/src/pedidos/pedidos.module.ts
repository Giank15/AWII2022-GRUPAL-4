import { Module } from '@nestjs/common';
import { PedidosController } from './pedidos.controller';
import { PedidosService } from './pedidos.service';
import { MongooseModule } from '@nestjs/mongoose';
import { pedidosSchema } from './schemas/pedidos.schemas';

@Module({
  imports:[MongooseModule.forFeature([
    {name:"Pedido", schema:pedidosSchema},
  ])],

  controllers: [PedidosController],
  providers: [PedidosService]
})
export class PedidosModule {}
