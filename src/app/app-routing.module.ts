import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarTableComponent } from './pages/car-table/car-table.component';
import { LoginComponent } from './pages/login/login.component';
import { SingUpComponent } from './pages/sing-up/sing-up.component';

const routes: Routes = [
  {path: "car", pathMatch: "full", component: CarTableComponent },
  {path: "login", pathMatch: "full", component: LoginComponent},
  {path: "sign-up", pathMatch: "full", component: SingUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
