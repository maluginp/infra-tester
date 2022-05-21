import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/create-player.dto';
import { UpdatePlayerDto } from './dto/update-player.dto';
import { InjectMetric } from '@willsoto/nestjs-prometheus';
import { Counter, Gauge, Histogram, Summary } from 'prom-client';

@Controller('players')
export class PlayersController {
  constructor(
    private readonly playersService: PlayersService,
    @InjectMetric("players_calls_counter") private counter: Counter<string>,
    @InjectMetric("players_calls_gauge") private gauge: Gauge<string>,
    @InjectMetric("players_calls_histogram") private histogram: Histogram<string>,
    @InjectMetric("players_calls_summary") private summary: Summary<string>,
  ) {}

  @Post()
  create(@Body() createPlayerDto: CreatePlayerDto) {
    return this.playersService.create(createPlayerDto);
  }

  @Get()
  findAll() {
    this.counter.inc()
    
    this.gauge.set(this.getRandomInt(1, 50))
    this.histogram.observe(this.getRandomInt(0,500))
    this.summary.observe(this.getRandomInt(0,500))
    return this.playersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePlayerDto: UpdatePlayerDto) {
    return this.playersService.update(+id, updatePlayerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playersService.remove(+id);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }
}
