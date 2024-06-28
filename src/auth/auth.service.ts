import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  // Simpan informasi pengguna secara statis (biasanya ini akan berasal dari database)
  private readonly users = [
    { username: 'john', password: 'password123', userId: 1, role: 'admin' },
    { username: 'jane', password: 'password456', userId: 2, role: 'user' },
  ];

  constructor(private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string) {
    const user = this.users.find(
      u => u.username === username && u.password === password,
    );
    return user; // Return user object if found, otherwise null
  }

  async generateToken(user: any) {
    const payload = { username: user.username, sub: user.userId, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
