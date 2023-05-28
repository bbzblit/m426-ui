import { Injectable } from '@angular/core';
import { Car } from '../dataaccess/car';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  readonly backendUrl = '/car';

  constructor(private http: HttpClient) {}

  public getList(): Observable<Car[]> {
    return this.http.get<Car[]>(environment.backendBaseUrl + this.backendUrl);
  }
}
