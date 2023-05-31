import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../dataaccess/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string){
    return this.http.post("/api/v1/login", {username: username, password: password});
  }

  public whoami(){
    return this.http.get<User>("/api/v1/user");
  }

  public logout(){
    return this.http.post("/api/v1/logout",{});
  }

  public register(user: User){
    return this.http.post("/api/v1/register", user);
  }

  public getList(): Observable<Array<User>>{
    return this.http.get<Array<User>>("/api/v1/user");
  }

}
