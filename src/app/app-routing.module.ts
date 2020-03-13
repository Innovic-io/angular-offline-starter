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
import { UploadPatientFormComponent } from './pages/upload-patient-form/upload-patient-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'appointments',
    component: AppointmentsComponent,
  },
  {
    path: 'appointments/create',
    component: CreateComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'messages/new',
    component: NewMessageComponent
  },
  {
    path: 'my-health',
    component: MyHealthComponent
  },
  {
    path: 'my-profile',
    component: MyProfileComponent
  },
  {
    path: 'my-profile/request',
    component: RequestComponent
  },
  {
    path: 'my-documents',
    component: MyDocumentsComponent
  },
  {
    path: 'upload-patient-form',
    component: UploadPatientFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
