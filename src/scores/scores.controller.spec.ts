// scores.controller.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { ScoresController } from './scores.controller';
import { ScoresService } from './scores.service';
import { DatabaseService } from '../database/database.service';
import { ConfigModule } from '@nestjs/config'; // Ensure ConfigModule is imported
import { JwtModule } from '@nestjs/jwt';

describe('ScoresController', () => {
  let controller: ScoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot(), // Import ConfigModule
        JwtModule.register({
          secret: 'test-secret',
          signOptions: { expiresIn: '1h' },
        }),
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
