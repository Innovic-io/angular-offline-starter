import { Roles } from './system.models';

export class EmployeeModel {
  guid: string;
  name: string;
  email: string;
  avatar: string;
  role: Roles;
}

