import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { moduloCliente } from './modules/cliente.module';
import { moduloMesero } from './modules/mesero.module';
import { moduloPropina } from './modules/propina.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,"..","public"),
    }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.connectionURL),
    moduloCliente,
    moduloMesero,
    moduloPropina
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}