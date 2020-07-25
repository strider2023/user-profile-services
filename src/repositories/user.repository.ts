import { getRepository, Like } from "typeorm";
import { User } from "../entity/user.model";

export class UserRepository {

    userRepository: any;

    constructor() {
        this.userRepository = getRepository(Event);
    }

    async createUser(user: User) {
        const resp = await this.userRepository.save(user);
        console.log(`Event, ${user.firstname} created successfully.`);
        return resp;
    }

    async getUserById(userId: number) {
        const event = await this.userRepository.findOne({ id: userId });
        if (event) {
            console.log("getEventById", `Event Found: ${event.firstname}`);
        } else {
            console.log("getEventById", `Event not found for the id ${userId}`);
        }
        return event;
    }

    async getUsers(query: any) {
        const count = query.count || 10;
        const offset = query.offset || 0;
        const filter = query.keyword || '';
        const orderBy = query.orderBy || 'DESC';
        const events = await this.userRepository.findAndCount(
            {
                where: { firstname: Like('%' + filter + '%') },
                order: { firstname: orderBy },
                take: count,
                skip: offset
            }
        );
        if (events) {
            console.log("getEvents", `Events count: ${events.length}.`);
        } else {
            console.log("getEvents", `No events found.`);
        }
        return events;
    }
}