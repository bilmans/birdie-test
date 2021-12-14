import { Module, HttpModule } from '@nestjs/common';
import { EventController } from './event.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventEntity } from 'src/entities/event.entitity';
import { EventService } from './event.service';

@Module({
  imports: [TypeOrmModule.forFeature([EventEntity]), HttpModule],
  controllers: [EventController],
  providers: [EventService],
})
export class EventModule {}
