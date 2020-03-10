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

  deleteAppointment(deletedAppointments: AppointmentModel[]) {
    return this.appointments = deletedAppointments;
  }

  confirmAppointment(doctorGUID: string, appointmentGUID: string) {
    if (confirm('Are you sure you want to confirm?')) {
      this.appointments.find(appointment => appointment.guid === appointmentGUID).confirmed = true;
    }
  }
}
