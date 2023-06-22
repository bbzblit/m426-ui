import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Car } from 'src/app/dataaccess/car.model';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-available-car-page',
  templateUrl: './available-car-page.component.html',
  styleUrls: ['./available-car-page.component.less']
})
export class AvailableCarPageComponent implements OnInit {

  public cars: Array<Car> = [];

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAvialbaleCars(new Date(), new Date()).subscribe({
      next: (cars) => this.cars = cars
    });
  }

}
