import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarTableComponent } from './pages/car-table/car-table.component';

const routes: Routes = [
  {path: "car", pathMatch: "full", component: CarTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
