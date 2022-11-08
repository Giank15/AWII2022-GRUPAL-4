import { Test, TestingModule } from '@nestjs/testing';
import { RecetaController } from './receta.controller';

describe('RecetaController', () => {
  let controller: RecetaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecetaController],
    }).compile();

    controller = module.get<RecetaController>(RecetaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
