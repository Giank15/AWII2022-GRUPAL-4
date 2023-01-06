import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//TODO http://localhost:3000/

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
