import { Injectable } from '@nestjs/common';
import { CreateReserveDto } from './dto/create-reserve.dto';
import { Reserve } from './entities/reserve.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as _ from 'lodash';

@Injectable()
export class ReserveService {
  constructor(@InjectRepository(Reserve)
  private readonly reserveRepository: Repository<Reserve>){}

  async getReserves(): Promise<Reserve[]> {
    return await this.reserveRepository.find();
  }

  async getReserveById(id: number): Promise<Reserve> {
     const list:Reserve[] = await this.reserveRepository.find({id});
     if (list.length === 1) {
       return list[0];
     }
     return null;
  }

  async createReserve(item: CreateReserveDto): Promise<Reserve> {
    const newItem = new Reserve();
    _.assign(newItem, item); 
    newItem.created_time = new Date();
    return await this.reserveRepository.save(newItem);
  }

  async updateReserve(id: number, item: CreateReserveDto): Promise<any> {
    const newItem = new Reserve();
    _.assign(newItem, item);    
    newItem.id = id;
    newItem.updated_time = new Date();
    return await this.reserveRepository.update(id, newItem);
  }
}
