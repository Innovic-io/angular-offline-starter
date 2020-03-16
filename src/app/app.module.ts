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
import { FormsModule } from '@angular/forms';
import { CurrentDateComponent } from './components/current-date/current-date.component';
import { TimeAgoPipe } from './pipes/time-ago.pipe';
import { TableComponent } from './components/table/table.component';
import { AlertsComponent } from './components/alerts/alerts.component';
import { NewMessageComponent } from './pages/messages/new-message/new-message.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { MyHealthComponent } from './pages/my-health/my-health.component';
import { BasicInfoComponent } from './components/basic-info/basic-info.component';
import { VitalStatsComponent } from './components/vital-stats/vital-stats.component';
import { AllergiesComponent } from './components/allergies/allergies.component';
import { MedicationsAndSupplementsComponent } from './components/medications-and-supplements/medications-and-supplements.component';
import { ProfileBasicInfoComponent } from './components/profile-basic-info/profile-basic-info.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { EmergencyContactComponent } from './components/emergency-contact/emergency-contact.component';
import { InboxComponent } from './components/inbox/inbox.component';
import { SuccessComponent } from './components/success/success.component';
import { RequestComponent } from './pages/my-profile/request/request.component';
import { SearchPipe } from './pipes/search.pipe';
import { TabsComponent } from './components/tabs/tabs.component';
import { TabComponent } from './components/tabs/tab/tab.component';
import { MyDocumentsComponent } from './pages/my-documents/my-documents.component';
import { FormsComponent } from './components/forms/forms.component';
import { NoticesComponent } from './components/notices/notices.component';
import { UploadPatientFormComponent } from './pages/my-documents/upload-patient-form/upload-patient-form.component';
import { MedicalTableComponent } from './components/medical-table/medical-table.component';
import { AccordionsComponent } from './components/accordions/accordions.component';
import { AccordionComponent } from './components/accordions/accordion/accordion.component';
import { FilterByTypePipe } from './pipes/filter-by-type.pipe';

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
    RolePipe,
    TimeAgoPipe,
    TableComponent,
    NewMessageComponent,
    MessagesComponent,
    AlertsComponent,
    MyHealthComponent,
    BasicInfoComponent,
    VitalStatsComponent,
    AllergiesComponent,
    MedicationsAndSupplementsComponent,
    AlertsComponent,
    ProfileBasicInfoComponent,
    MyProfileComponent,
    ContactInformationComponent,
    EmergencyContactComponent,
    InboxComponent,
    SuccessComponent,
    RequestComponent,
    InboxComponent,
    SearchPipe,
    TabsComponent,
    TabComponent,
    MyDocumentsComponent,
    FormsComponent,
    NoticesComponent,
    UploadPatientFormComponent,
    MedicalTableComponent,
    UploadPatientFormComponent,
    AccordionsComponent,
    AccordionComponent,
    FilterByTypePipe
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
