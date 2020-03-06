import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { UpcomingAppointmentsComponent } from './components/upcoming-appointments/upcoming-appointments.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AppointmentsComponent,
    UpcomingAppointmentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
