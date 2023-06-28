import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/dataaccess/car.model';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.less']
})
export class CarEditComponent implements OnInit {

  public car: Car | null = null;

  public carForm = new FormGroup({
    serialNumber: new FormControl(0, [Validators.required, Validators.min(0)]),
    licencePlate: new FormControl("", [Validators.required, Validators.maxLength(250)]),
    brand: new FormControl("", [Validators.required, Validators.maxLength(250)]),
    model: new FormControl("", [Validators.required, Validators.maxLength(250)]),
    color: new FormControl("", [Validators.required, Validators.maxLength(250)])
  });

  constructor(private router: Router, private carService: CarService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  /**
   * Reloads the form if a new car gets loaded
   * @returns void
   */
  reloadForm() {
    if (!this.car) {
      return;
    }
    this.carForm = this.formBuilder.group(this.car) as any;
  }

  /**
   * Method that loads the car if page is in eding mode
   */
  ngOnInit(): void {
    const carId = this.route.snapshot.paramMap.get("id");

    if (carId !== null) {

      this.carService.getCarById(+carId).subscribe({
        next: (car) => { this.car = car; this.reloadForm() }
      })
    }
  }

  /**
   * Go back to overview over all cars
   */
  goBack() {
    this.router.navigate(['car']);
  }

  /**
   * Method to rather create a new car or update the exiting one
   */
  createCar() {
    if (!this.car?.id) { //If id doesnt exists === create Car else update existing car
      let car: Car = this.carForm.getRawValue() as any;
      this.carService.createCar(car).subscribe({
        next: () => this.router.navigate(['car']),
      })
    } else {
      let car: Car = { ...this.carForm.getRawValue() as any, id: this.car.id };
      this.carService.updateCar(car).subscribe({
        next: () => this.router.navigate(['car']),
      })

    }

  }
}
