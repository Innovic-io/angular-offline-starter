import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AppointmentsComponent} from './pages/appointments/appointments.component';
import {CreateComponent} from './pages/appointments/create/create.component';
import {NewMessageComponent} from './pages/messages/new-message/new-message.component';
import {MessagesComponent} from './pages/messages/messages.component';
import { MyHealthComponent } from './pages/my-health/my-health.component';
import { MyProfileComponent } from './pages/my-profile/my-profile.component';
import { RequestComponent } from './pages/my-profile/request/request.component';
import { MyDocumentsComponent } from './pages/my-documents/my-documents.component';
import { UploadPatientFormComponent } from './pages/my-documents/upload-patient-form/upload-patient-form.component';
import { AppointmentDetailsComponent } from './pages/appointments/appointment-details/appointment-details.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './auth.guard';
import { HistoryChangeDetailComponent } from './pages/appointments/history-change-detail/history-change-detail.component';
import { LoggedGuard } from './logged.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'appointments/create',
    component: CreateComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'appointments/:id',
    component: AppointmentDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'appointments/:id/:id',
    component: HistoryChangeDetailComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'messages',
    component: MessagesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'messages/new',
    component: NewMessageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'messages/new/:id',
    component: NewMessageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-health',
    component: MyHealthComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-profile',
    component: MyProfileComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-profile/request',
    component: RequestComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-documents',
    component: MyDocumentsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'upload-patient-form',
    component: UploadPatientFormComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoggedGuard],
  },
  {
    path: '**',
    redirectTo: '/login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
