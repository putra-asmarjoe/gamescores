import { Controller, Post, Get, Body, UseGuards, Req, HttpException, HttpStatus } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { AuthGuard } from '../auth/auth.guard';
import { Request } from 'express';
import { UserPayload } from '../auth/user-payload.interface';

@Controller()
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @UseGuards(AuthGuard)
  @Post('scores')
  async createScore(@Req() req: Request, @Body() body: { playerName: string, value: number }) {
    const { playerName, value } = body; 
    const user = req.user as UserPayload;

    if (user.role !== 'admin' && user.username !== body.playerName) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    await this.scoresService.createScore(playerName, value);
  }

  @Get('leaderboard')
  async getLeaderboard() {
    return await this.scoresService.getLeaderboard();
  }

}