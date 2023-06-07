import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from 'src/app/dataaccess/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.less']
})
export class SingUpComponent {

  public registerForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    firstname: new FormControl("", [Validators.required]),
    lastname: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(8)])
  }); // FormControl for login

  public retypePassword = new FormControl("", [Validators.required]);

  public constructor(private userService: UserService, private router: Router, private _snackBar: MatSnackBar) { }

  /**
  Method to start register process
   */
  register() {
    this.userService.register(this.registerForm.getRawValue() as User).subscribe({
      next: () => this.router.navigate(['login']), //Redirect to login after success
      error: (error) => { console.log(error); this._snackBar.open(error.error.message || error.error.detail, "Okay") }, //Show error message...
    })

  }

}
