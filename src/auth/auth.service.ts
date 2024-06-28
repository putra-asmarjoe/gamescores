// src/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly users = [
    { username: 'john', password: 'password123', userId: 1, role: 'admin' },
    { username: 'jane', password: 'password456', userId: 2, role: 'user' },
  ];

  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string) {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (!user) {
      return null;
    }
    return { userId: user.userId, username: user.username, role: user.role };
  }

  async generateToken(user: any) {
    const payload = { username: user.username, sub: user.userId, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
