import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarTableComponent } from './pages/car-table/car-table.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path: "car", pathMatch: "full", component: CarTableComponent },
  {path: "login", pathMatch: "full", component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
