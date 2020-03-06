import { EmployeeModel } from './employee.model';
import { AppointmentType } from './system.models';

export class AppointmentModel {
  guid: string;
  date: Date;
  time: string;
  provider: EmployeeModel;
  location: string;
  appType: AppointmentType;
  notes: string;
  phone: string;
  email: string;
  confirmed: boolean;
}
