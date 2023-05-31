import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Car } from 'src/app/dataaccess/car';
import { CarService } from 'src/app/service/car.service';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.less']
})
export class CarTableComponent {
  displayedColumns: string[] = ['id', 'serialnumber', 'licenceplate', 'brand', 'brand', 'color', 'action'];
  CarDataSource = new MatTableDataSource<Car>();

  constructor(private carService: CarService, private router: Router, private _snakBar: MatSnackBar) {}

  async ngOnInit() {
    await this.reloadData();
  }

  reloadData() {
    this.carService.getList().subscribe(obj => {
      this.CarDataSource.data = obj;
    });
  }

  deleteCar(id: number){
    this.carService.deleteCar(id).subscribe({
      next: () => this.reloadData(),
      error: () => this._snakBar.open("Car got already reservations you need to cancel this first", "Okay"),
    });
  }
}
