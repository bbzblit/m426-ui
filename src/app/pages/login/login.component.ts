import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  public username = new FormControl("", [Validators.required]);
  public password = new FormControl("", [Validators.required]);

  constructor(private userService: UserService, private _snackBar: MatSnackBar, private router: Router) { }

  /**
   * Method that gets executed when user presses the loggin button
   * @param event Thrown event
   */
  login(event: Event) {
    event.preventDefault();
    this.userService.login(this.username.value!, this.password.value!).subscribe({
      next: () => window.location.href = "/home", //Redirects on success (By reloading the page thats why not router gets used. 
      //I have to reload it becaue we aren't using a State manager... which is just sometimes annoying...)
      error: () => this._snackBar.open("Wrong Username or Password", "Okay") //Shows that login failed caused by wrong password or username
    })
  }

}
