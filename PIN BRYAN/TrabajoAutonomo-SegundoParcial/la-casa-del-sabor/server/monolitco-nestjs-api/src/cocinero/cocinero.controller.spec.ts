import { Test, TestingModule } from '@nestjs/testing';
import { CocineroController } from './cocinero.controller';
import { CocineroService } from './cocinero.service';

describe('CocineroController', () => {
  let controller: CocineroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CocineroController],
      providers: [CocineroService],
    }).compile();

    controller = module.get<CocineroController>(CocineroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
