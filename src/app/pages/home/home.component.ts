import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/dataaccess/user.model';
import { UserService } from 'src/app/service/user.service';

/**
 * Home component gets used as a redirect after the login 
 * or if the user tryes to access a non existing url
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit{

  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.userService.whoami().subscribe(user => {
      if(user.employee){
        this.router.navigate(['/car']);
      } else{
        this.router.navigate(['/car/reservation']);
      }
    });
  }

}
