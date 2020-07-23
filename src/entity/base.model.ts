import { Column, PrimaryGeneratedColumn } from "typeorm";
import { Status } from './status.enum'

export abstract class BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "enum",
        enum: Status,
        default: Status.ACTIVE,
        nullable: false
    })
    status: Status;

    @Column({ type: "int", default: -1, nullable: false })
    createdBy: number;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: false })
    createdOn: string;

    @Column({ type: "int", default: -1, nullable: false })
    updatedBy: number;

    @Column({ type: "datetime", default: () => 'NOW()', nullable: false })
    updatedOn: string;

}