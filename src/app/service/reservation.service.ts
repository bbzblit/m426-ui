import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Reservation } from '../dataaccess/reservation.model';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  public reserveCar(reservation: Reservation): Observable<Reservation>{
    return this.http.post<Reservation>("/api/v1/reservation", reservation);
  }

  public getReservations(): Observable<Array<Reservation>>{
    return this.http.get<Array<Reservation>>("/api/v1/reservation");
  }

}
