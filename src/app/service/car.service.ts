import { Injectable } from '@angular/core';
import { Car } from '../dataaccess/car.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { identifierName, ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) { }

  /**
   * Get all cars
   * @returns list of cars
   */
  public getList(): Observable<Car[]> {
    return this.http.get<Array<Car>>("/api/v1/car");
  }

  /**
   * Get specific car by id
   * @param id the car id
   * @returns the car
   */
  public getCarById(id: number): Observable<Car> {
    return this.http.get<Car>("/api/v1/car/" + id);
  }

  /**
   * Method to create a new Car
   * @param car The new Car
   * @returns The new Car
   */
  public createCar(car: Car): Observable<Car> {
    return this.http.post<Car>("/api/v1/car", car);
  }

  /**
   * Method to update a Car
   * @param car new Values for the Car
   * @returns Updated car
   */
  public updateCar(car: Car): Observable<Car> {
    return this.http.put<Car>("/api/v1/car/" + car.id, car);
  }

  /**
   * Method to delete a car
   * @param id the car id
   * @returns Observable with nothing in it...
   */
  public deleteCar(id: number): Observable<void> {
    return this.http.delete<void>("/api/v1/car/" + id);
  }
}
