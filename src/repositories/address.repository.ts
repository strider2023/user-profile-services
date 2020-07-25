import { getRepository, Like } from "typeorm";
import { Address } from "../entity/address.model";

export class AddressRepository {

    addressRepository: any;

    constructor() {
        this.addressRepository = getRepository(Event);
    }
}