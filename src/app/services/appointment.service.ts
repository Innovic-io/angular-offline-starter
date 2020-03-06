import { Injectable } from '@angular/core';

import { AppointmentModel } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: AppointmentModel[] = [];

  constructor() {}

  createAppointment(appointment: AppointmentModel) {
    this.appointments.push(appointment);
    console.log(this.appointments);

  }

  getAllDoctorAppointments(doctorGUID: string) {
   return this.appointments.filter(appointment => appointment.provider.guid === doctorGUID);
  }

  confirmAppointment(doctorGUID: string, appointmentGUID: string) {

  }

}
