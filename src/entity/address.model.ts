import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from "typeorm";
import { BaseEntity } from './base.model';
import { User } from './user.model';

@Entity()
export class Address extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @OneToOne(type => User)
    @JoinColumn()
    user: User;

    @Column({ type: "text", nullable: false })
    house: string;

    @Column({ type: "text", nullable: false })
    street: string;

    @Column({ type: "text", nullable: false })
    landmark: string;

    @Column({ type: "int", default: -1, nullable: false })
    pincode: string;

    @Column({ type: "text", nullable: false })
    state: string;

    @Column({ type: "text", nullable: true })
    country: string;

    @Column({ type: "text", nullable: true })
    addressType: string;
}