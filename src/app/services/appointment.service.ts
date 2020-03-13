import { Injectable } from '@angular/core';

import { AppointmentModel } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: AppointmentModel[] = [];
  private now = new Date();

  constructor() {
  }

  createAppointment(appointment: AppointmentModel) {
    this.appointments.push(appointment);
  }

  getAllUpcomingDoctorAppointments(doctorGUID: string) {
    return this.appointments.filter(appointment => appointment.provider.guid === doctorGUID && appointment.date >= this.now);
  }

  getAllPastDoctorAppointments(doctorGUID: string) {
    return this.appointments.filter(appointment => appointment.provider.guid === doctorGUID && appointment.date < this.now);
  }

  deleteAppointments(appointmentGUID: string) {
    const appointmentIndex = this.appointments.findIndex(appointment => appointment.guid === appointmentGUID);
    if (appointmentIndex >= 0) {
      this.appointments.splice(appointmentIndex, 1);
    }
  }

  confirmAppointment(doctorGUID: string, appointmentGUID: string) {
    if (confirm('Are you sure you want to confirm?')) {
      this.appointments.find(appointment => appointment.guid === appointmentGUID).confirmed = true;
    }
  }
}
