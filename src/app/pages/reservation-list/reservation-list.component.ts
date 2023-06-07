import { Component, OnInit } from '@angular/core';
import { Reservation } from 'src/app/dataaccess/reservation.model';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.less']
})
export class ReservationListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'car', 'user', 'start', 'end'];

  public reservations: Array<Reservation> = [];
  public previewReservations: Array<Reservation> = [];
  public index = 0;
  public pageSize = 10;

  constructor(private reservationService: ReservationService) {

  }

  ngOnInit(): void {
    this.reservationService.getReservations().subscribe({
      next: (reservations) => { this.reservations = reservations; this.updatePreviewReservations() }
    })
  }

  updatePreviewReservations() {
    const length = this.reservations.length;
    if (this.pageSize * (this.index + 1) > length) {
      this.previewReservations = this.reservations.slice(this.pageSize * this.index, length);
    } else {
      this.previewReservations = this.reservations.slice(this.pageSize * this.index, this.pageSize * (this.index + 1));
    }
  }


  changePage(event: any) {
    this.index = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePreviewReservations();
  }

}
