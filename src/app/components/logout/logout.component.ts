import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';


/**
 * Component to handle to logout
 * This is not a pages because it gets rendert inside a other page
 */
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent implements OnInit {

  public isLogedIn = false;

  constructor(private userService: UserService, private router: Router) { }

  /**
   * Method that automatic detects if the user isn't longer loged in. 
   * It will the redirect him to the login page
   */
  updateLoginStatus() {
    this.userService.whoami().subscribe({
      next: () => this.isLogedIn = true,
      error: () => { this.isLogedIn = false; if (window.location.pathname != "/sign-up") { this.router.navigate(['login']); } },
    })
  }

  ngOnInit(): void {
    this.updateLoginStatus();
  }

  /**
   * Method to logout
   */
  logout() {
    this.userService.logout().subscribe();
    this.isLogedIn = false;
    this.router.navigate(['login']);
  }
}
