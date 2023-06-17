import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../dataaccess/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  /**
   * Method to login by username and password
   * @param username The Username
   * @param password The Password
   * @returns Observable of nothing...
   */
  public login(username: string, password: string) {
    return this.http.post("/api/v1/login", { username: username, password: password });
  }

  /**
   * Get logged in user
   * @returns the current user
   */
  public whoami() {
    return this.http.get<User>("/api/v1/user");
  }

  /**
   * Method to logout
   * @returns Observable of nothing...
   */
  public logout() {
    return this.http.post("/api/v1/logout", {});
  }

  /**
   * Method to sign up 
   * @param user The new User
   * @returns The new User
   */
  public register(user: User) {
    return this.http.post("/api/v1/register", user);
  }

  /**
   * Method to get all Users
   * @returns An Array of all users
   */
  public getList(): Observable<Array<User>> {
    return this.http.get<Array<User>>("/api/v1/users");
  }

  public updateUser(user: User): Observable<User>{
    return this.http.put<User>(`/api/v1/user/${user.id}`, user);
  }

  public deleteUser(id: number): Observable<void>{
    return this.http.delete<void>(`/api/v1/user/${id}`)
  }

}
