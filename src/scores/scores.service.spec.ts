import { Test, TestingModule } from '@nestjs/testing';
import { ScoresService } from './scores.service';
import { DatabaseModule } from '../database/database.module'; // Pastikan path sesuai dengan struktur proyek Anda

describe('ScoresService', () => {
  let service: ScoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [DatabaseModule], // Pastikan DatabaseModule diimpor
      providers: [ScoresService],
    }).compile();

    service = module.get<ScoresService>(ScoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Tambahkan test case lain sesuai kebutuhan Anda
});
