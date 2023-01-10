import { Test, TestingModule } from '@nestjs/testing';
import { MeseroController } from './mesero.controller';

describe('MeseroController', () => {
  let controller: MeseroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeseroController],
    }).compile();

    controller = module.get<MeseroController>(MeseroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
