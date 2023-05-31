import { Injectable } from '@angular/core';
import { Car } from '../dataaccess/car';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  readonly backendUrl = '/api/car';

  constructor(private http: HttpClient) {}

  public getList(): Observable<Car[]> {
    return this.http.get<Car[]>(this.backendUrl);
  }

  public getCarById(id: number): Observable<Car>{
    return this.http.get<Car>("/api/car/" + id);
  }

  public createCar(car: Car): Observable<Car>{
    return this.http.post<Car>("/api/car", car);
  }
}
