import { Relationship, Roles } from './system.models';

export class EmployeeModel {
  guid: string;
  name: string;
  lastName: string;
  password: string;
  middleName: string;
  dateOfBirth: Date;
  gender: string;
  avatar: string;
  age: number;
  role: Roles;
  contact: ContactModel;
  emergencyPerson: EmergencyModel;
  healthInfo: HealthInfoModel;
  constructor() {
    this.contact = new ContactModel();
    this.emergencyPerson = new EmergencyModel();
    this.healthInfo = new HealthInfoModel();
  }
}

export class ContactModel {
  cellPhone: number;
  workPhone: number;
  homePhone: number;
  city: string;
  state: string;
  zip: number;
  address: string;
  email: string;
}

export class HealthInfoModel {
  height: number;
  weight: number;
  bloodType: string;
  temperature: number;
  heartRate: number;
  bloodPressure: string;
  bloodPressureSYS: number;
  bloodPressureDIAS: number;
  drugAllergies: string[];
  nonDrugAllergies: string[];
  medications: string[];
  supplements: string[];
}

export class EmergencyModel {
  name: string;
  lastName: string;
  middleName: string;
  phone: number;
  email: string;
  address: string;
  city: string;
  relationship: Relationship;
}

