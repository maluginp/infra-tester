import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrometheusModule } from "@willsoto/nestjs-prometheus";
import { PlayersModule } from './players/players.module';

@Module({
  imports: [PrometheusModule.register(), PlayersModule],
  controllers: [AppController],
  providers: [
    AppService,
  ]
})
export class AppModule {}
