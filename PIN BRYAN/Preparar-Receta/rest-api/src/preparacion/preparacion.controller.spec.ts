import { Test, TestingModule } from '@nestjs/testing';
import { PreparacionController } from './preparacion.controller';

describe('PreparacionController', () => {
  let controller: PreparacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PreparacionController],
    }).compile();

    controller = module.get<PreparacionController>(PreparacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
