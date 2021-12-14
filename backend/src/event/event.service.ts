import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getRepository, Repository } from 'typeorm';
import { EventEntity } from '../entities/event.entitity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(EventEntity) private repo: Repository<EventEntity>
  ) {}

  async getAllEvents(): Promise<EventEntity[]> {
    return await getRepository(EventEntity)
                  .createQueryBuilder('event')
                  .orderBy('timestamp')
                  .getMany();
  }

  async getCareRecipient(){
    return await getRepository(EventEntity)
                  .createQueryBuilder('event')
                  .select('care_recipient_id')
                  .distinct(true)
                  .getRawMany();
  }

}
