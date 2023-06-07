import { Car } from "./car.model";
import { User } from "./user.model";

export interface Reservation{
    id?: number,
    car: Car,
    start: Date,
    end: Date,
    user?: User
}