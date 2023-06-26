import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Reservation } from 'src/app/dataaccess/reservation.model';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.less']
})
export class ReservationListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'car', 'user', 'start', 'end', 'action']; //Columns that get shown in the table

  public reservations: Array<Reservation> = [];
  public previewReservations: Array<Reservation> = [];
  public index = 0;
  public pageSize = 10;


  constructor(private reservationService: ReservationService, private _snakBar: MatSnackBar) {

  }

  /**
   * Fetches all active reservations of user on component load
   */
  ngOnInit(): void {
    if(window.location.pathname === "/car/reservation/today" ){
      this.displayedColumns.pop();
      this.reservationService.getReservationOfToday().subscribe({
        next: (reservations) => { this.reservations = reservations; this.updatePreviewReservations() }
      })  
    } else{
      this.reservationService.getReservations().subscribe({
        next: (reservations) => { this.reservations = reservations; this.updatePreviewReservations() }
      })  
    }
  }

  /**
   * Updates the reservations that get shown in the paged table
   */
  updatePreviewReservations() {
    const length = this.reservations.length;
    if (this.pageSize * (this.index + 1) > length) {
      this.previewReservations = this.reservations.slice(this.pageSize * this.index, length);
    } else {
      this.previewReservations = this.reservations.slice(this.pageSize * this.index, this.pageSize * (this.index + 1));
    }
  }

  /**
   * Method that gets executed if the user switches the page on the reservation list
   * It automatic loads the next/previews reservations and updates all the values
   * @param event Thrown event
   */
  changePage(event: any) {
    this.index = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePreviewReservations();
  }

  revokeReservation(id: number) {
    this.reservationService.revokeReservation(id).subscribe({
      next: () => {
        this.reservations = this.reservations.filter(reservation => reservation.id !== id);
        this.updatePreviewReservations();
        this._snakBar.open("Successfull deleted the reservation", "Got It")
      }
    })
  }

}
