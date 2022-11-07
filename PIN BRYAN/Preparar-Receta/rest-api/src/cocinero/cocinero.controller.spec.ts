import { Test, TestingModule } from '@nestjs/testing';
import { CocineroController } from './cocinero.controller';

describe('CocineroController', () => {
  let controller: CocineroController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CocineroController],
    }).compile();

    controller = module.get<CocineroController>(CocineroController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
