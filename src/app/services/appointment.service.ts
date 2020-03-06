import { Injectable } from '@angular/core';

import { AppointmentModel } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: AppointmentModel[];

  constructor() {}

  crateAppointment(appointment: AppointmentModel) {
    // Is time slot already in use
  }

  getAllDoctorAppointments(doctorGUID: string) {

  }

  confirmAppointment(doctorGUID: string, appointmentGUID: string) {

  }
}
