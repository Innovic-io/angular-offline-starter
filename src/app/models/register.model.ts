import { uuidv4 } from '../helpers/uuid';
import { ContactModel, EmergencyModel, HealthInfoModel } from './employee.model';

export class RegisterModel {
  name: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  constructor() {
    this.name = 'Kristina';
    this.lastName = 'Ilic';
    this.email = 'a@gmail.com';
    this.password = 'kristinailic';
    this.confirmPassword = 'kristinailic';
  }
}

