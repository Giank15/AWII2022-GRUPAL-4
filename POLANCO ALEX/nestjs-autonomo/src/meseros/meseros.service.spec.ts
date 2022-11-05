import { Test, TestingModule } from '@nestjs/testing';
import { MeserosService } from './meseros.service';

describe('MeserosService', () => {
  let service: MeserosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MeserosService],
    }).compile();

    service = module.get<MeserosService>(MeserosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
