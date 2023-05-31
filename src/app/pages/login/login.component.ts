import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  constructor(private userService: UserService, private _snackBar: MatSnackBar, private router: Router){}

  login(event: Event, username: string, password: string){
    event.preventDefault();
    this.userService.login(username, password).subscribe({
      next: () => window.location.href = "/car",
      error: () =>  this._snackBar.open("Wrong Username or Password", "Okay")
    })
  }

}
