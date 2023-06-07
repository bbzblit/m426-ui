import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/dataaccess/car.model';
import { User } from 'src/app/dataaccess/user.model';
import { CarService } from 'src/app/service/car.service';
import { UserService } from 'src/app/service/user.service';
import { Reservation } from 'src/app/dataaccess/reservation.model';
import { ReservationService } from 'src/app/service/reservation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-reserve-car',
  templateUrl: './reserve-car.component.html',
  styleUrls: ['./reserve-car.component.less']
})
export class ReserveCarComponent implements OnInit {

  public cars: Array<Car> = [];

  public previewCars: Array<Car> = [];

  public users: Array<User> = [];

  public loadedCar: Car | null = null;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  }); //FormControll to evaluate start and end date of reservation


  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router,
    private userService: UserService, private reservationService: ReservationService, private _snakBar: MatSnackBar) { }

  reloadCars() {
    this.previewCars = [...this.cars];
  }

  /**
   * Method that gets executed on init of component
   * It fetches all the cars that can get reservated to preview them
   */
  ngOnInit(): void {

    this.carService.getList().subscribe({
      next: (cars) => { this.cars = cars; this.reloadCars() }
    })

    this.userService.getList().subscribe({
      next: (users) => this.users = users
    })
  }

  /**
   * Method to get a new date object in exactly 1 hour
   * @param date start time
   * @returns time in one hour
   */
  inOneHour(date: Date) {
    date.setHours(date.getHours() + 1)
    return date;
  }

  /**
   * Method to go back to reservation overview 
   * @param event Thrown event
   */
  goBack(event: Event) {
    event.preventDefault();
    this.router.navigate(['car', 'reservation']);
  }

  /**
   * Method to reserve a new Car.
   * @param event Thrown event
   */
  reserveCar(event: Event) {
    event.preventDefault();
    let date = this.range.getRawValue();
    let reservation: Reservation = {
      car: this.loadedCar!,
      end: date.end!,
      start: date.start!,
    };

    this.reservationService.reserveCar(reservation).subscribe({
      next: (reservation) => this.router.navigate(['car', 'reservation']), //Redirect back if everything went sucessful
      error: (error) => this._snakBar.open(error.error.message || error.error.detail, "Okay") //Show potential error message
    });

  }

  loadCar(car: Car) {
    this.loadedCar = car;
  }

  filterCar(key: string) {
    this.previewCars = this.cars.filter(car => car.licencePlate.indexOf(key) !== -1);
  }
}
