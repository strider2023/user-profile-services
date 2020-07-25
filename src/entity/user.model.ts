import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from './base.model';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "text", nullable: false })
    firstname: string;

    @Column({ type: "text", nullable: false })
    middlename: string;

    @Column({ type: "text", nullable: false })
    lastname: string;

    @Column({ type: "text", nullable: false })
    phoneNumber: string;

    @Column({ type: "text", nullable: false })
    email: string;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: false })
    dob: string;

    @Column({ type: "int", default: -1, nullable: false })
    joiningDate: number;

    @Column({ type: "text", nullable: false })
    membershipType: string;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: false })
    membershipStart: number;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: false })
    membershipEnd: number;
}