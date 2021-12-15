import { EventService } from './event.service';
export declare class EventController {
    private eventService;
    constructor(eventService: EventService);
    getAllEvents(): Promise<import("../entities/event.entitity").EventEntity[]>;
    getCareRecipient(): Promise<any[]>;
}
