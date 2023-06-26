import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../dataaccess/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  /**
   * Method to create a new Reservation
   * @param reservation The new Reservations
   * @returns The confirmed Reservation
   */
  public reserveCar(reservation: Reservation): Observable<Reservation> {
    return this.http.post<Reservation>("/api/v1/reservation", reservation);
  }

  /**
   * Method to get all reservations of the logged in user
   * @returns an array of reservations
   */
  public getReservations(): Observable<Array<Reservation>> {
    return this.http.get<Array<Reservation>>("/api/v1/reservation");
  }

  public revokeReservation(id: number): Observable<void> {
    return this.http.delete<void>(`/api/v1/reservation/${id}`);
  }

  public getReservationOfToday(): Observable<Array<Reservation>>{
    return this.http.get<Array<Reservation>>("/api/v1/reservation/today");  
  }

}
