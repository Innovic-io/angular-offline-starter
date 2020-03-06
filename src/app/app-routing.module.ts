import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from "./pages/dashboard/dashboard.component";
import {AppointmentsComponent} from "./pages/appointments/appointments.component";
import {CreateComponent} from "./pages/appointments/create/create.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: DashboardComponent
  },
  {
    path: "appointments",
    component: AppointmentsComponent,
  },
  {
    path: "appointments/create",
    component: CreateComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
