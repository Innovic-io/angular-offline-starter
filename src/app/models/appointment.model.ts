import { EmployeeModel, HealthInfoModel } from './employee.model';
import { AppointmentType } from './system.models';
import { uuidv4 } from '../helpers/uuid';

export class DiagnosisModel {
  diagnosisText: string;
  diagnosisDate: Date;

  constructor() {
     this.diagnosisDate = new Date();
  }
}
export class InvoiceModel {
  invoicePrice: number;
  invoiceDate: Date;

  constructor() {
    this.invoiceDate = new Date();
  }
}

export enum HistoryModel {
  healthInfo = 'HealthInfo',
  diagnosis = 'Diagnosis',
  invoice = 'Invoice'
}

export class HistoryChanges {
  date: Date;
  guid: string;
  actor: EmployeeModel;
  what: HistoryModel;

  previousState: DiagnosisModel | InvoiceModel | HealthInfoModel;
  newState: DiagnosisModel | InvoiceModel | HealthInfoModel;

  constructor() {
    this.guid = uuidv4();
  }
}
export class AppointmentModel {
  guid: string;
  firstName: string;
  lastName: string;
  date: Date;
  provider: EmployeeModel;
  location: string;
  appType: AppointmentType;
  diagnosis: DiagnosisModel;
  invoice: InvoiceModel;
  appointmentHealthInfo: HealthInfoModel;
  appointmentHistory: Array<HistoryChanges>;
  notes: string;
  phone: string;
  email: string;
  confirmed: boolean;

  constructor() {
    this.guid = uuidv4();
    this.confirmed = false;
    this.diagnosis = new DiagnosisModel();
    this.invoice = new InvoiceModel();
    this.appointmentHistory = [];
    this.appointmentHealthInfo = new HealthInfoModel();
  }
}
