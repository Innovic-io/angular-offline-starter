import {Injectable} from '@angular/core';

import {AppointmentModel} from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: AppointmentModel[] = [];

  constructor() {
  }

  createAppointment(appointment: AppointmentModel) {
    this.appointments.push(appointment);
  }

  getAllDoctorAppointments(doctorGUID: string) {
    return this.appointments.filter(appointment => appointment.provider.guid === doctorGUID);
  }

  confirmAppointment(doctorGUID: string, appointmentGUID: string) {
    const array = this.appointments.filter(appointment => appointment.guid === appointmentGUID);
    console.log(array);
    for (const element of array) {
      element.confirmed = true;
    }
  }
}
