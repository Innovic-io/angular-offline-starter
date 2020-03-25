import { Injectable } from '@angular/core';

import { EmployeeModel, HealthInfoModel } from '../models/employee.model';
import { DatabaseService } from './database.service';
import {
  AppointmentModel,
  DiagnosisModel,
  HistoryChanges,
  HistoryModel,
  InvoiceModel
} from '../models/appointment.model';
import { SystemService } from './system.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private now = new Date();
  private appointment = new AppointmentModel();

  constructor(public databaseService: DatabaseService, public systemService: SystemService) {
  }

  async createAppointment(appointment: AppointmentModel) {
    try {

      await this.databaseService.insert<AppointmentModel>('appointments', appointment);
      this.systemService.createAlertMessage('Appointment is created!');

    } catch (e) {
      this.systemService.createDangerAlertMessage('Appointment is not created!');
    }
  }

  getAppointmentByID(appointmentID: string) {
    return this.databaseService.getSingle<AppointmentModel>('appointments', appointmentID);
  }

  getHistoryChangeByID(historyID: string) {
    return this.appointment.appointmentHistory.find(change => change.guid === historyID);
  }

  getAllUpcomingDoctorAppointments(doctorGUID: string, start= 0, end = 0) {
    return this.databaseService.getAllUpcoming<AppointmentModel>('appointments', this.now, doctorGUID, start, end);
  }

  getAllUpcomingDoctorAppointmentsCount(doctorGUID: string) {
    return this.databaseService.getAllUpcomingCount<AppointmentModel>('appointments', this.now, doctorGUID);
  }

  getAllPastDoctorAppointments(doctorGUID: string, start = 0, end = 0) {
    return this.databaseService.getAllPast<AppointmentModel>('appointments', this.now, doctorGUID, start, end);
  }

  getAllPastDoctorAppointmentsCount(doctorGUID: string) {
    return this.databaseService.getAllPastCount<AppointmentModel>('appointments', this.now, doctorGUID);
  }

  async deleteAppointments(appointmentGUID: string) {
    try {

      await this.databaseService.delete('appointments', appointmentGUID);
      this.systemService.createAlertMessage('Delete is completed!');

    } catch (e) {

      this.systemService.createDangerAlertMessage('Delete is not completed!');

    }
  }

  async updateAppointment(appointment: AppointmentModel | HealthInfoModel | DiagnosisModel | InvoiceModel, type: string, guid) {
    appointment = await this.getAppointmentByID(guid);
    const historyOfChanges = new HistoryChanges();
    switch (type) {
      case 'healthInfo':
        historyOfChanges.previousState = this.appointment.appointmentHealthInfo;
        this.appointment.appointmentHealthInfo = {...this.appointment.appointmentHealthInfo, ...appointment};
        historyOfChanges.newState = appointment.appointmentHealthInfo;
        historyOfChanges.what = HistoryModel.healthInfo;
        historyOfChanges.date = new Date();
        historyOfChanges.actor = appointment.provider;
        appointment.appointmentHistory.push(historyOfChanges);
        console.log('Niz', appointment.appointmentHistory);
        break;
      case 'diagnosis':
        historyOfChanges.previousState = this.appointment.diagnosis;
        this.appointment.diagnosis = {...this.appointment.diagnosis, ...appointment, diagnosisDate: new Date()};
        historyOfChanges.newState = appointment.diagnosis;
        historyOfChanges.what = HistoryModel.diagnosis;
        historyOfChanges.date = new Date();
        historyOfChanges.actor = appointment.provider;
        appointment.appointmentHistory.push(historyOfChanges);
        break;
      case 'invoice':
        historyOfChanges.previousState = this.appointment.invoice;
        this.appointment.invoice = {...this.appointment.invoice, ...appointment, invoiceDate: new Date()};
        historyOfChanges.newState = appointment.invoice;
        historyOfChanges.what = HistoryModel.invoice;
        historyOfChanges.date = new Date();
        historyOfChanges.actor = appointment.provider;
        appointment.appointmentHistory.push(historyOfChanges);
        break;
    }
    await this.databaseService.update<AppointmentModel>('appointments', this.appointment?.guid, appointment);
    return appointment;
  }

  async confirmAppointment(doctorGUID: string, appointmentGUID: string) {
    if (confirm('Are you sure you want to confirm?')) {
      return this.databaseService.updateConfirmed<AppointmentModel>('appointments', appointmentGUID, true);
    }
  }

}
