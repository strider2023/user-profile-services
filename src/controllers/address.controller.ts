import { Request, Response } from "express";
import { Address } from "../entity/address.model";
import { AddressRepository } from "../repositories/address.repository";

export class UserController {

    constructor(app: any) {
        app.get("/api/user/:userId/addresses", this.getUsers);
        app.post("/api/user/:userId/address", this.createUser);
        app.get("/api/user/:userId/address/:addressId", this.getUser);
        app.patch("/api/user/:userId/address/:addressId", this.updateUser);
        app.delete("/api/user/:userId/address/:addressId", this.deleteUser);
    }

    getUsers(req: Request, res: Response) {
        const eventsRepository = new AddressRepository();
        res.send("Hello world!");
    };

    getUser(req: Request, res: Response) {
        const eventsRepository = new AddressRepository();
        res.send("Hello world!");
    };

    createUser(req: Request, res: Response) {
        const eventsRepository = new AddressRepository();
        res.send("Hello world!");
    };

    updateUser(req: Request, res: Response) {
        res.send("Hello world!");
    };

    deleteUser(req: Request, res: Response) {
        res.send("Hello world!");
    };
}