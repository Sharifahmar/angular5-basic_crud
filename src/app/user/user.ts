import { Address } from "../../app/user/address";
export class User{
    id: number;
    name: string;
    phone: string;
    email: string;
    address: Address = new Address();
}