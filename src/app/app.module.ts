import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { QuickLinksComponent } from './components/quick-links/quick-links.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { UpcomingAppointmentsComponent } from './components/upcoming-appointments/upcoming-appointments.component';
import { CreateComponent } from './pages/appointments/create/create.component';
import { RolePipe } from './pipes/role.pipe';
import {FormsModule} from '@angular/forms';
import { CurrentDateComponent } from './components/current-date/current-date.component';
import { UpcomingPastComponent } from './pages/appointments/upcoming-past/upcoming-past.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { TableComponent } from './pages/appointments/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WelcomeComponent,
    QuickLinksComponent,
    AppointmentsComponent,
    UpcomingAppointmentsComponent,
    CreateComponent,
    HeaderComponent,
    RolePipe,
    CurrentDateComponent,
    UpcomingPastComponent,
    RolePipe,
    TimeAgoPipe,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
