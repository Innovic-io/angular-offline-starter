import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {AppointmentsComponent} from './pages/appointments/appointments.component';
import {CreateComponent} from './pages/appointments/create/create.component';
import {NewMessageComponent} from './pages/messages/new-message/new-message.component';
import {MessagesComponent} from "./pages/messages/messages.component";
import { MyProfileComponent } from './pages/my-profile/my-profile.component';

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
    path: 'messages/newMessage',
    component: NewMessageComponent
  },
  {
    path: 'my-profile',
    component: MyProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
