import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, isFormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { Observable, Subject } from 'rxjs';
import { Car } from 'src/app/dataaccess/car.model';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-available-car-page',
  templateUrl: './available-car-page.component.html',
  styleUrls: ['./available-car-page.component.less'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'de-CH' }
  ]
})
export class AvailableCarPageComponent implements OnInit {

  public cars: Array<Car> = [];
  public lastEnd: Date = new Date();
  public updateCarEvent: Subject<Array<Car>> = new Subject<Array<Car>>();
  public range = new FormGroup({
    start: new FormControl<Date>(new Date()),
    end: new FormControl<Date>(this.lastEnd),
  }); //FormControll to evaluate start and end date of reservation

  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.carService.getAvialbaleCars(new Date(), new Date()).subscribe({
      next: (cars) => {this.cars = cars;this.updateCarEvent.next(cars)}
    });
  }

  loadNewAvailableCars() {
    let form = this.range.getRawValue()
    if (!form.start || !form.end) {
      return;
    }
    if (this.lastEnd === form.end) {
      return;
    }
    this.lastEnd = form.end;
    this.carService.getAvialbaleCars(new Date(form.start.getTime() - (form.start.getTimezoneOffset() * 60000)),
      new Date(form.end.getTime() - (form.end.getTimezoneOffset() * 60000))).subscribe(cars => { this.cars = cars; this.updateCarEvent.next(cars) });
  }

}
