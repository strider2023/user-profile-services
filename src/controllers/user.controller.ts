import { Request, Response } from "express";
import { User } from "../entity/user.model";
import { UserRepository } from "../repositories/user.repository";

export class UserController {

    constructor(app: any) {
        app.get("/api/users", this.getUsers);
        app.post("/api/user", this.createUser);
        app.get("/api/user/:userId", this.getUser);
        app.patch("/api/user/:userId", this.updateUser);
        app.delete("/api/user/:userId", this.deleteUser);
    }

    getUsers(req: Request, res: Response) {
        const eventsRepository = new UserRepository();
        eventsRepository.getUsers(req.query).then(resp => {
            res.send(resp);
        });
    };

    getUser(req: Request, res: Response) {
        const eventsRepository = new UserRepository();
        eventsRepository.getUserById(Number(req.params.eventId)).then(resp => {
            res.send(resp);
        });
    };

    createUser(req: Request, res: Response) {
        const event = new User();
        event.eventName = req.body.eventName;
        event.eventDescription = req.body.eventDescription;
        event.maxAudience = req.body.maxAudience;
        event.eventStart = req.body.eventStart;
        event.eventEnd = req.body.eventEnd;
        event.eventType = req.body.eventType;
        event.eventLiveURL = req.body.eventLiveURL;
        const eventsRepository = new UserRepository();
        eventsRepository.createUser(event).then((resp: any) => {
            res.send(resp.id);
        });
    };

    updateUser(req: Request, res: Response) {
        res.send("Hello world!");
    };

    deleteUser(req: Request, res: Response) {
        res.send("Hello world!");
    };
}