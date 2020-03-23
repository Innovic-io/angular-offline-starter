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
import { filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: AppointmentModel[] = [];
  private now = new Date();
  private appointment = new AppointmentModel();

  constructor(public databaseService: DatabaseService) {
  }

   async createAppointment(appointment: AppointmentModel) {
    await this.databaseService.insert<AppointmentModel>('appointments', appointment);
   // this.appointments.push(appointment);
  }

  getAppointmentByID(appointmentID: string) {
    return this.appointments.find(appointment => appointment.guid === appointmentID);
  }

  getHistoryChangeByID(historyID: string) {
    return this.appointment.appointmentHistory.find(change => change.guid === historyID);
  }

  async getAllUpcomingDoctorAppointments(doctorGUID: string) {
    return await this.databaseService.getAllUpcoming<AppointmentModel>('appointments', this.now, doctorGUID);
    // return this.appointments.filter(appointment => appointment.provider.guid === doctorGUID && appointment.date >= this.now);
  }

  async getAllPastDoctorAppointments(doctorGUID: string) {
    return await this.databaseService.getAllPast<AppointmentModel>('appointments', this.now, doctorGUID);
    // return this.appointments.filter(appointment => appointment.provider.guid === doctorGUID && appointment.date < this.now);
  }

  async deleteAppointments(appointmentGUID: string) {
    // const appointmentIndex = this.appointments.findIndex(appointment => appointment.guid === appointmentGUID);
    // if (appointmentIndex >= 0) {
    //  // this.appointments.splice(appointmentIndex, 1);
    //  await this.databaseService.delete('appointments', appointmentGUID);
    // }
    await this.databaseService.delete('appointments', appointmentGUID);
  }

  updateAppointment(appointment: AppointmentModel | HealthInfoModel | DiagnosisModel | InvoiceModel, type: string, guid) {
    appointment = this.getAppointmentByID(guid);
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
    console.log(appointment);
    return appointment;
  }

  async confirmAppointment(doctorGUID: string, appointmentGUID: string) {
    if (confirm('Are you sure you want to confirm?')) {
      await this.databaseService.updateConfirmed<AppointmentModel>('appointments', appointmentGUID, true);
      // this.appointments.find(appointment => appointment.guid === appointmentGUID).confirmed = true;
    }
  }

}
