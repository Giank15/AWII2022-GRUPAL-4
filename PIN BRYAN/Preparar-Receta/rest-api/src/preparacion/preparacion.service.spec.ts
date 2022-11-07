import { Test, TestingModule } from '@nestjs/testing';
import { PreparacionService } from './preparacion.service';

describe('PreparacionService', () => {
  let service: PreparacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreparacionService],
    }).compile();

    service = module.get<PreparacionService>(PreparacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
