import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReservesController } from './reserves.controller';
import { ReserveService } from './reserves.service';
import { Reserve } from './entities/reserve.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Reserve])
  ],
  providers: [ReserveService],
  controllers: [ReservesController],
  exports: [
    ReserveService
  ]
})
export class ReservesModule {}
