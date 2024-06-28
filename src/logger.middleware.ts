import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const log = `${new Date().toISOString()} - ${req.ip} - ${req.method} - ${req.originalUrl} - ${res.statusCode}\n`;
    fs.appendFileSync(path.join(__dirname, '../logs/requests.log'), log);
    next();
  }
}