import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { Car } from 'src/app/dataaccess/car.model';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.less']
})
export class CarTableComponent {

  public displayedColumns: string[] = ['id', 'serialnumber', 'licenceplate', 'brand', "model", 'color', 'action'];
  public previewCars: Array<Car> = [];
  @Input() public cars: Array<Car> = [];
  public index = 0;
  public pageSize = 10;
  @Input() public overrideDefault = false;
  @Input() updateCarEvent?: Subject<Array<Car>>;

  constructor(private carService: CarService, private router: Router, private _snakBar: MatSnackBar) { }

  ngOnInit() {
    if (!this.overrideDefault) {
      this.reloadData();
    } else {
      this.reloadData();
      this.displayedColumns = ['licenceplate', 'brand', "model", 'color'];
      this.updateCarEvent?.subscribe((cars) => {this.cars = cars;this.updatePreviewCars()});
    }
  }

  updatePreviewCars() {
    console.log(this.cars);
    const length = this.cars.length;
    if (this.pageSize * (this.index + 1) > length) {
      this.previewCars = this.cars.slice(this.pageSize * this.index, length);
    } else {
      this.previewCars = this.cars.slice(this.pageSize * this.index, this.pageSize * (this.index + 1));
    }
  }


  changePage(event: any) {
    this.index = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePreviewCars();
  }



  reloadData() {
    this.carService.getList().subscribe(cars => { this.cars = cars; this.updatePreviewCars() });
  }

  deleteCar(id: number) {
    this.carService.deleteCar(id).subscribe({
      next: () => this.reloadData(),
      error: () => this._snakBar.open("Car got already reservations you need to cancel this first", "Okay"),
    });
  }
}
