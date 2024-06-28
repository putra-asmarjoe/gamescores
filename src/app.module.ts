// src/app.module.ts
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { RateLimiterModule, RateLimiterGuard } from 'nestjs-rate-limiter';
import { DatabaseModule } from './database/database.module';
import { ScoresModule } from './scores/scores.module';
import { AuthService } from './auth/auth.service';
import { JwtStrategy } from './auth/jwt.strategy';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    ScoresModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || '45345345345',
      signOptions: { expiresIn: '1h' },
    }),
    RateLimiterModule.register({
      points: 10, // 10 requests per minute
      duration: 60,
    }),
  ],
  providers: [
    AuthService,
    JwtStrategy,
    {
      provide: APP_GUARD,
      useClass: RateLimiterGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
