import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarEditComponent } from './pages/car-edit/car-edit.component';
import { CarTableComponent } from './pages/car-table/car-table.component';
import { LoginComponent } from './pages/login/login.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';

const routes: Routes = [
  {path: "car", pathMatch: "full", component: CarTableComponent },
  {path: "login", pathMatch: "full", component: LoginComponent},
  {path: "sign-up", pathMatch: "full", component: SingUpComponent},
  {path: "car/edit", pathMatch: "full", component: CarEditComponent},
  {path: "car/edit/:id", pathMatch: "full", component: CarEditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
