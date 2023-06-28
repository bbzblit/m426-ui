import { NotExpr } from '@angular/compiler';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from 'src/app/dataaccess/user.model';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.less']
})
export class UserOverviewComponent {


  displayedColumns: string[] = ['lastName', 'firstName', 'username', 'email', 'employee', 'action']; //Columns that get shown in the table

  public users: Array<User> = [];
  public previewUsers: Array<User> = [];
  public index = 0;
  public pageSize = 10;

  constructor(private userService: UserService, private _snakBar: MatSnackBar) {

  }

  /**
   * Fetches all active reservations of user on component load
   */
  ngOnInit(): void {
    this.userService.getList().subscribe({
      next: (users) => { this.users = users; this.updatePreviewUsers() }
    })
  }

  /**
   * Updates the reservations that get shown in the paged table
   */
  updatePreviewUsers() {
    const length = this.users.length;
    if (this.pageSize * (this.index + 1) > length) {
      this.previewUsers = this.users.slice(this.pageSize * this.index, length);
    } else {
      this.previewUsers = this.users.slice(this.pageSize * this.index, this.pageSize * (this.index + 1));
    }
  }

  /**
   * Method that gets executed if the user switches the page on the reservation list
   * It automatic loads the next/previews reservations and updates all the values
   * @param event Thrown event
   */
  changePage(event: any) {
    this.index = event.pageIndex;
    this.pageSize = event.pageSize;
    this.updatePreviewUsers();
  }

  /**
   * Toggles the employee status of the user
   * @param index 
   */
  changeEmployeeStatus(index: number) {
    let user = this.previewUsers[index];
    user.employee = !user.employee;
    this.userService.updateUser(user).subscribe({
      next: () => this._snakBar.open("Successful updated the User status :)", "Got it")
    });
  }

  /**
   * Method to delete a new User
   * @param id 
   */
  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe({
      next: () => { this.users = this.users.filter(user => user.id !== id); this.updatePreviewUsers(); this._snakBar.open("Successful deleted the user", "Got It") }
    })
  }
}
