import { Injectable } from '@nestjs/common';
import { createPool, Pool } from 'mysql2/promise';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService {
  private pool: Pool;

  constructor(private configService: ConfigService) {
    this.pool = createPool({
        host: configService.get<string>('DB_HOST') || 'localhost',
        port: configService.get<number>('DB_PORT') || 3388,
        user: configService.get<string>('DB_USERNAME') || 'root',
        password: configService.get<string>('DB_PASSWORD') || 'j03p455N0R1',
        database: configService.get<string>('DB_DATABASE') || 'nest',
     
    });
  }

  async query(sql: string, params: any[]): Promise<any> {
    const [rows] = await this.pool.query(sql, params);
    return rows;
  }

  async execute(sql: string, params: any[]): Promise<any> {
    const [result] = await this.pool.execute(sql, params);
    return result;
  }
}
