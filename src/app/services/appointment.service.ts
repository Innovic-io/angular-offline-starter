import { Injectable } from '@angular/core';

import { AppointmentModel } from '../models/appointment.model';

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

  deleteAppointments(appointmentGUID: string) {
    const appointmentIndex = this.appointments.findIndex(appointment => appointment.guid === appointmentGUID);
    if (appointmentIndex >= 0 && confirm('Are you sure you want to delete this appointment?')) {
      this.appointments.splice(appointmentIndex, 1);
    }
  }

  confirmAppointment(doctorGUID: string, appointmentGUID: string) {
    if (confirm('Are you sure you want to confirm?')) {
      this.appointments.find(appointment => appointment.guid === appointmentGUID).confirmed = true;
    }
  }
}
