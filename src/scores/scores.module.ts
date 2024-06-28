import { Module } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { ScoresController } from './scores.controller';
import { JwtModule } from '@nestjs/jwt';
import { DatabaseModule } from '../database/database.module'; // Pastikan DatabaseModule diimpor

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET || '45345345345',
      signOptions: { expiresIn: '1h' },
    }),
    DatabaseModule, // Pastikan DatabaseModule diimpor di sini
  ],
  providers: [ScoresService],
  controllers: [ScoresController],
})
export class ScoresModule {}