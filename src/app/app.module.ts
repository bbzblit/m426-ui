import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { CarTableComponent } from './pages/car-table/car-table.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LogoutComponent } from './pages/logout/logout.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CarEditComponent } from './pages/car-edit/car-edit.component';
import { ReserveCarComponent } from './pages/reserve-car/reserve-car.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReservationListComponent } from './pages/reservation-list/reservation-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UserOverviewComponent } from './pages/user-overview/user-overview.component';
import {MatCheckboxModule} from '@angular/material/checkbox'; 

@NgModule({
  declarations: [
    AppComponent,
    CarTableComponent,
    LoginComponent,
    LogoutComponent,
    SingUpComponent,
    CarEditComponent,
    ReserveCarComponent,
    ReservationListComponent,
    UserOverviewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatCheckboxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
