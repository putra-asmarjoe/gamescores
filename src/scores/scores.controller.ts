// src/scores/scores.controller.ts

import { Controller, Post, Get, Body, UseGuards, Req } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { AuthGuard } from '../auth/auth.guard';
import { Request } from 'express';
import { UserPayload } from '../auth/user-payload.interface';

@Controller()
export class ScoresController {
  constructor(private readonly scoresService: ScoresService) {}

  @UseGuards(AuthGuard)
  @Post('scores')
  async createScore(@Req() req: Request, @Body() body: { value: number }) {
    const player = (req.user as UserPayload).username; // Asumsikan user terautentikasi memiliki username
    await this.scoresService.createScore(player, body.value);
  }

  @Get('leaderboard')
  async getLeaderboard() {
    return await this.scoresService.getLeaderboard();
  }

}
