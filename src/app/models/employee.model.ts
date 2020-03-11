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
  age: number;
  role: Roles;
  cellPhone: number;
  workPhone: number;
  homePhone: number;
  city: string;
  state: string;
  zip: number;
  address: string;
  healthInfo: HealthInfoModel;

  constructor() {
    this.healthInfo = new HealthInfoModel();
  }
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

