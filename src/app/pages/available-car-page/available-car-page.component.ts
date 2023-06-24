import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, isFormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { Car } from 'src/app/dataaccess/car.model';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-available-car-page',
  templateUrl: './available-car-page.component.html',
  styleUrls: ['./available-car-page.component.less']
})
export class AvailableCarPageComponent implements OnInit {

  public cars: Array<Car> = [];
  public updateCarEvent: Subject<void> = new Subject<void>();
  public range = new FormGroup({
    start: new FormControl<Date>(new Date()),
    end: new FormControl<Date>(new Date()),
  }); //FormControll to evaluate start and end date of reservation

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAvialbaleCars(new Date(), new Date()).subscribe({
      next: (cars) => this.cars = cars
    });
  }

  loadNewAvailableCars() {
    let form = this.range.getRawValue()
    if (!form.start || !form.end) {
      return;
    }
    this.carService.getAvialbaleCars(form.start, form.end).subscribe(cars => {this.cars = cars; this.updateCarEvent.next()});
  }

}
