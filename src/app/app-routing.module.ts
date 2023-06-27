import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AvailableCarPageComponent } from './pages/available-car-page/available-car-page.component';
import { CarEditComponent } from './pages/car-edit/car-edit.component';
import { CarTableComponent } from './pages/car-table/car-table.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ReservationListComponent } from './pages/reservation-list/reservation-list.component';
import { ReserveCarComponent } from './pages/reserve-car/reserve-car.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';
import { UserOverviewComponent } from './pages/user-overview/user-overview.component';

const routes: Routes = [
  { path: "car", pathMatch: "full", component: CarTableComponent },
  { path: "login", pathMatch: "full", component: LoginComponent },
  { path: "sign-up", pathMatch: "full", component: SingUpComponent },
  { path: "car/edit", pathMatch: "full", component: CarEditComponent },
  { path: "car/edit/:id", pathMatch: "full", component: CarEditComponent },
  { path: "car/reservation/new", pathMatch: "full", "component": ReserveCarComponent },
  { path: "car/reservation", pathMatch: "full", "component": ReservationListComponent },
  { path: "car/reservation/today", pathMatch: "full", "component": ReservationListComponent },
  { path: "user", pathMatch: "full", "component": UserOverviewComponent },
  { path: "car/reservation/available", pathMatch: "full", component: AvailableCarPageComponent },
  { path: "home", pathMatch: "full", component: HomeComponent },
  { path: "", pathMatch: "prefix", redirectTo: "/home" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
