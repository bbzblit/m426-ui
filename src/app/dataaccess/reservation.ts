import { Car } from "./car";
import { User } from "./user";

export interface Reservation{
    id?: number,
    car: Car,
    start: Date,
    end: Date,
    user?: User
}