import { Test, TestingModule } from '@nestjs/testing';
import { RecetaService } from './receta.service';

describe('RecetaService', () => {
  let service: RecetaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecetaService],
    }).compile();

    service = module.get<RecetaService>(RecetaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
