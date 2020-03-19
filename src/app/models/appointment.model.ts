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
  notes: string;
  phone: string;
  email: string;
  confirmed: boolean;
  constructor() {
    this.guid = uuidv4();
    this.confirmed = false;
    this.diagnosis = new DiagnosisModel();
    this.invoice = new InvoiceModel();
    this.appointmentHealthInfo = new HealthInfoModel();
  }
}
