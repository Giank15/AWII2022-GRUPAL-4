import { Test, TestingModule } from '@nestjs/testing';
import { MeserosController } from './meseros.controller';

describe('MeserosController', () => {
  let controller: MeserosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MeserosController],
    }).compile();

    controller = module.get<MeserosController>(MeserosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
