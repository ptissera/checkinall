import { Controller, Get, Put, Param, Post, Body } from '@nestjs/common';

import { CreateReserveDto } from './dto/create-reserve.dto';
import { Reserve } from './entities/reserve.entity';
import { ReserveService } from './reserves.service';

@Controller('api/reserves')
export class ReservesController {
  constructor(private reserveService: ReserveService) {}
  
  @Get(':id')
  getReserveById(@Param('id') id): Promise<Reserve> {
    return this.reserveService.getReserveById(id);
  }

  @Get('')
  async getReserves(): Promise<Reserve[]> {
    return await this.reserveService.getReserves();
  }

  @Post('')
  async createReserve(@Body() reserve: CreateReserveDto) {
    try {
    await this.reserveService.createReserve(reserve);
    } catch (err) {
        console.log('error en save reserve', err);
    }
  }

  @Put(':id')
  async updateReserve(@Param('id') id, @Body() reserve: CreateReserveDto) {
    try {
    await this.reserveService.updateReserve(id, reserve);
    } catch (err) {
        console.log('error en save reserve', err);
    }
  }
}
