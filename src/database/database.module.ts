import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseService } from './database.service';

@Module({
  imports: [
    ConfigModule.forRoot(), // Pastikan ConfigModule.forRoot() diimpor di sini
  ],
  providers: [DatabaseService, ConfigService], // Pastikan ConfigService juga disediakan di sini
  exports: [DatabaseService], // Ekspor DatabaseService jika diperlukan
})
export class DatabaseModule {}