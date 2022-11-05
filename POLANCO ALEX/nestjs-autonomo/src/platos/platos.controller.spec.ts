import { Test, TestingModule } from '@nestjs/testing';
import { PlatosController } from './platos.controller';

describe('PlatosController', () => {
  let controller: PlatosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PlatosController],
    }).compile();

    controller = module.get<PlatosController>(PlatosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
