import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from './base.model';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", nullable: false })
    eventName: string;

    @Column({ type: "text", nullable: false })
    eventDescription: string;

    @Column({ type: "text", nullable: false })
    eventType: string;

    @Column({ type: "int", default: -1, nullable: false })
    maxAudience: number;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: false })
    eventStart: string;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: false })
    eventEnd: string;

    @Column({ type: "text", nullable: true })
    eventLiveURL: string;
}