import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/dataaccess/reservation.model';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.less']
})
export class ReservationListComponent implements OnInit{

  displayedColumns: string[] = ['id', 'car', 'user', 'start', 'end'];

  public reservations: Array<Reservation> = [];

  constructor(private reservationService: ReservationService) {

  }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe({
      next: (reservations) => this.reservations = reservations
    })
  }

}
