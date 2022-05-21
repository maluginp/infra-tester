import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { PlayersMetrics } from 'src/players/players.metrics';

@Module({
  controllers: [PlayersController],
  providers: [
    PlayersService,
    ...PlayersMetrics
  ]
})
export class PlayersModule {}
