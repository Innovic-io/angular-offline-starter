import { EmployeeModel } from './employee.model';
import { AppointmentType } from './system.models';

export class AppointmentModel {
  guid: string;
  firstName: string;
  lastName: string;
  date: Date;
  provider: EmployeeModel;
  location: string;
  appType: AppointmentType;
  notes: string;
  phone: string;
  email: string;
  confirmed: boolean;
}
