// src/auth/jwt.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: '45345345345',
    });
  }

  async validate(payload: any) {
    const user = await this.authService.validateUser(payload.username, payload.password);
    if (!user) {
        console.log('username '+payload.username)
        console.log('password '+payload.password)
      throw new UnauthorizedException();
    }
    return user;
  }
}
