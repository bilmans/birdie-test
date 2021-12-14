import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('events')
export class EventEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    timestamp: string;

    @Column()
    event_type: string;

    @Column()
    caregiver_id: string;
    
    @Column()
    visit_id: string;

    @Column()
    care_recipient_id: string;

    @Column('json')
    payload: JSON;

}