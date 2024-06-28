import { Module } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { ScoresController } from './scores.controller';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from '../database/database.module'; // Pastikan DatabaseModule diimpor
import { RateLimiterModule, RateLimiterGuard } from 'nestjs-rate-limiter';

@Module({
  imports: [
    RateLimiterModule.register({
      points: 10,
      duration: 60,
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET || '45345345345',
      signOptions: { expiresIn: '1h' },
    }),
    DatabaseModule, // Pastikan DatabaseModule diimpor di sini
  ],
  providers: [ScoresService, RateLimiterGuard],
  controllers: [ScoresController],
})
export class ScoresModule {}