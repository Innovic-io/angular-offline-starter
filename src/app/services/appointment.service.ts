import { Injectable } from '@angular/core';

import { HealthInfoModel } from '../models/employee.model';
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

  async getHistoryChangeByID(guid, historyID: string) {
    const appointment = await this.databaseService.getSingle<AppointmentModel>('appointments', guid);
    return appointment.appointmentHistory.find(change => change.guid === historyID);
  }

  getAllUpcomingDoctorAppointments(doctorGUID: string, start = 0, end = 0) {
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
    const newAppointment = await this.getAppointmentByID(guid);
    const historyOfChanges = new HistoryChanges();
    switch (type) {
      case 'healthInfo':
        historyOfChanges.previousState = newAppointment.appointmentHealthInfo;
        newAppointment.appointmentHealthInfo = { ...newAppointment.appointmentHealthInfo, ...appointment };
        historyOfChanges.newState = newAppointment.appointmentHealthInfo;
        historyOfChanges.what = HistoryModel.healthInfo;
        historyOfChanges.date = new Date();
        historyOfChanges.actor = newAppointment.provider;
        newAppointment.appointmentHistory.push(historyOfChanges);
        break;
      case 'diagnosis':
        historyOfChanges.previousState = newAppointment.diagnosis;
        newAppointment.diagnosis = { ...newAppointment.diagnosis, ...appointment, diagnosisDate: new Date() };
        historyOfChanges.newState = newAppointment.diagnosis;
        historyOfChanges.what = HistoryModel.diagnosis;
        historyOfChanges.date = new Date();
        historyOfChanges.actor = newAppointment.provider;
        newAppointment.appointmentHistory.push(historyOfChanges);
        break;
      case 'invoice':
        historyOfChanges.previousState = newAppointment.invoice;
        newAppointment.invoice = { ...newAppointment.invoice, ...appointment, invoiceDate: new Date() };
        historyOfChanges.newState = newAppointment.invoice;
        historyOfChanges.what = HistoryModel.invoice;
        historyOfChanges.date = new Date();
        historyOfChanges.actor = newAppointment.provider;
        newAppointment.appointmentHistory.push(historyOfChanges);
        break;
    }
    await this.databaseService.update<AppointmentModel>('appointments', newAppointment.guid, newAppointment);

    return newAppointment;
  }

  async confirmAppointment(doctorGUID: string, appointmentGUID: string) {
    if (confirm('Are you sure you want to confirm?')) {
      return this.databaseService.updateConfirmed<AppointmentModel>('appointments', appointmentGUID, true);
    }
  }
}
