import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DlDateTimeDateModule, DlDateTimePickerModule } from 'angular-bootstrap-datetimepicker';
import { registerLocaleData } from '@angular/common';
import localeRs from '@angular/common/locales/sr-Latn';

registerLocaleData(localeRs, 'sr-RS');

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
import { NewMessageComponent } from './pages/appointments/new-message/new-message.component';

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
    TableComponent,
    NewMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    DlDateTimeDateModule,
    DlDateTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
