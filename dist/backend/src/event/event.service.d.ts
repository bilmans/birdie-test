import { Repository } from 'typeorm';
import { EventEntity } from '../entities/event.entitity';
export declare class EventService {
    private repo;
    constructor(repo: Repository<EventEntity>);
    getAllEvents(): Promise<EventEntity[]>;
    getCareRecipient(): Promise<any[]>;
}
