import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class ScoresService {
  constructor(private databaseService: DatabaseService) {}

  async createScore(playerName: string, score: number): Promise<void> {
    await this.databaseService.execute(
      'INSERT INTO scores (playerName, score) VALUES (?, ?)',
      [playerName, score],
    );
  }

  async getLeaderboard(): Promise<{ playerName: string; score: number }[]> {
    const rows = await this.databaseService.query(
      'SELECT playerName, score FROM scores ORDER BY score DESC LIMIT 10',
      [],
    );
    return rows;
  }
}