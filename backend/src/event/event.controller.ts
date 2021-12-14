import {Controller, Get} from '@nestjs/common';
import { EventService } from './event.service';


@Controller('event')
export class EventController {
  constructor(
      private eventService: EventService,
  ) {}

  @Get()
  getAllEvents() {
    return this.eventService.getAllEvents();
  }

  @Get('careRecipient')
  getCareRecipient() {
    return this.eventService.getCareRecipient()
  }

}
