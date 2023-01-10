import { Test, TestingModule } from '@nestjs/testing';
import { MeseroService } from './mesero.service';

describe('MeseroService', () => {
  let service: MeseroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeseroService],
    }).compile();

    service = module.get<MeseroService>(MeseroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
