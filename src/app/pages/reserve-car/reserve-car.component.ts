import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/dataaccess/car';
import { User } from 'src/app/dataaccess/user';
import { CarService } from 'src/app/service/car.service';
import { UserService } from 'src/app/service/user.service';
import { Reservation } from 'src/app/dataaccess/reservation';
import { ReservationService } from 'src/app/service/reservation.service';

@Component({
  selector: 'app-reserve-car',
  templateUrl: './reserve-car.component.html',
  styleUrls: ['./reserve-car.component.less']
})
export class ReserveCarComponent implements OnInit {

  public car!: Car;

  public cars: Array<Car> = [];

  public previewCars: Array<Car> = [];

  public users: Array<User> = [];

  public loadedCar: Car | null = null;

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  constructor(private carService: CarService, private route: ActivatedRoute, private router: Router, private userService: UserService, private reservationService: ReservationService){}

  reloadCars(){
    this.previewCars = [...this.cars];
  }

  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get("id");

    this.carService.getCarById(+carId!).subscribe({
      next: (car) => this.car = car
    })

    this.carService.getList().subscribe({
      next: (cars) => {this.cars = cars;this.reloadCars()}
    })

    this.userService.getList().subscribe({
      next: (users) => this.users = users
    })
  }

  inOneHour(date: Date){
    date.setHours(date.getHours() + 1)
    return date;
  }

  goBack(){
    this.router.navigate(['reservation']);
  }

  reserveCar(event: Event){
    event.preventDefault();
    let date = this.range.getRawValue();
    let reservation: Reservation = {
      car: this.loadedCar!,
      end: date.end!,
      start: date.start!,
    };

    this.reservationService.reserveCar(reservation).subscribe({
      next: (reservation) => console.log(reservation)
    });

  }

  loadCar(car: Car){
    this.loadedCar = car;
  }

  filterCar(key: string){
    this.previewCars = this.cars.filter(car => car.licencePlate === key);
  }
}
