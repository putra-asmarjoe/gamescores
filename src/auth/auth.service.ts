import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async validateUser(payload: any) {
    // Implementasi validasi pengguna berdasarkan payload JWT
    // Misalnya, cari pengguna di basis data berdasarkan ID pengguna dari payload
    return { userId: payload.sub, username: payload.username, role: payload.role };
  }

  async generateToken(user: any) {
    const payload = { username: user.username, sub: user.userId, role: user.role };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}