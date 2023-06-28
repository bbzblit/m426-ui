import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/dataaccess/user.model';
import { UserService } from 'src/app/service/user.service';

/**
 * Component to create an app menu
 * This is a component and not a page because it gets rendert inside a other pages
 */
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  
  public user: User | null = null;

  constructor(private userservice: UserService){}

  ngOnInit(): void {
    this.userservice.whoami().subscribe(user => this.user = user);
  }

}
