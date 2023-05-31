import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.less']
})
export class LogoutComponent implements OnInit {

  public isLogedIn = false;

  constructor(private userService: UserService, private router: Router){}

  updateLoginStatus(){
    this.userService.whoami().subscribe({
      next: () => this.isLogedIn = true,
      error: () => this.isLogedIn = false,
    })
  }

  ngOnInit(): void {
    this.updateLoginStatus();
  }

  logout(){
    this.userService.logout().subscribe();
    this.isLogedIn = false;
    this.router.navigate(['login']);
  }
}
