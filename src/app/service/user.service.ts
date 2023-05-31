import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public login(username: string, password: string){
    return this.http.post("/api/v1/login", {username: username, password: password});
  }

  public whoami(){
    return this.http.get("/api/v1/user");
  }

  public logout(){
    return this.http.post("/api/v1/logout",{});
  }

}
