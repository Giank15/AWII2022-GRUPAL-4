import { Test, TestingModule } from '@nestjs/testing';
import { PlatoService } from './plato.service';

describe('PlatoService', () => {
  let service: PlatoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PlatoService],
    }).compile();

    service = module.get<PlatoService>(PlatoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
