import { Injectable } from '@angular/core';

import { AppointmentModel, DiagnosisModel, InvoiceModel } from '../models/appointment.model';
import {  HealthInfoModel } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: AppointmentModel[] = [];
  private now = new Date();
  private appointment = new AppointmentModel();

  constructor() {
  }

  createAppointment(appointment: AppointmentModel) {
    this.appointments.push(appointment);
  }

  getAppointmentByID(appointmentID: string) {
    return this.appointments.find(appointment => appointment.guid === appointmentID);
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
  updateAppointment(appointment: AppointmentModel | HealthInfoModel | DiagnosisModel | InvoiceModel, type: string, guid) {
    appointment = this.getAppointmentByID(guid);
    switch (type) {
      case 'healthInfo':
        this.appointment.appointmentHealthInfo = {...this.appointment.appointmentHealthInfo, ...appointment};
        break;
      case 'diagnosis':
        this.appointment.diagnosis = {...this.appointment.diagnosis, ...appointment, diagnosisDate: new Date()};
        break;
      case 'invoice':
        this.appointment.invoice = {...this.appointment.invoice, ...appointment, invoiceDate: new Date()};
        break;
    }
    console.log(appointment);
    return appointment;
  }

  confirmAppointment(doctorGUID: string, appointmentGUID: string) {
    if (confirm('Are you sure you want to confirm?')) {
      this.appointments.find(appointment => appointment.guid === appointmentGUID).confirmed = true;
    }
  }

}
