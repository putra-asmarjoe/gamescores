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
    const query = `
      SELECT playerName, MAX(score) AS score
      FROM scores
      GROUP BY playerName
      ORDER BY score DESC
      LIMIT 10
    `;
    
    const rows = await this.databaseService.query(query, []);
    return rows.map(row => ({ playerName: row.playerName, score: row.score }));
  }
}