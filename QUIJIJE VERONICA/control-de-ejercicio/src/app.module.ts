import { join } from 'path';
import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,"..","public"),
      }),
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI)
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
