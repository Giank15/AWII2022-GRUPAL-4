import { Test, TestingModule } from '@nestjs/testing';
import { CocineroService } from './cocinero.service';

describe('CocineroService', () => {
  let service: CocineroService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CocineroService],
    }).compile();

    service = module.get<CocineroService>(CocineroService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
