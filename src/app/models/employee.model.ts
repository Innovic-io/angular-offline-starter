import { Roles } from './system.models';

export class EmployeeModel {
  guid: string;
  name: string;
  lastName: string;
  middleName: string;
  dateOfBirth: Date;
  gender: string;
  email: string;
  avatar: string;
  role: Roles;
  cellPhone: number;
  workPhone: number;
  homePhone: number;
  city: string;
  state: string;
  zip: number;
  address: string;
}

