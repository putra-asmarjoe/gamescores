import { Test, TestingModule } from '@nestjs/testing';
import { ScoresController } from './scores.controller';
import { ScoresService } from './scores.service';
import { DatabaseService } from '../database/database.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { RateLimiterModule } from 'nestjs-rate-limiter';

describe('ScoresController', () => {
  let controller: ScoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(),
        JwtModule.register({
          secret: 'test-secret',
          signOptions: { expiresIn: '1h' },
        }),
        RateLimiterModule, // Import RateLimiterModule directly
      ],
      controllers: [ScoresController],
      providers: [ScoresService, DatabaseService],
    }).compile();

    controller = module.get<ScoresController>(ScoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
