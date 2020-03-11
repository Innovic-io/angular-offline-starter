import { Roles } from './system.models';

export class EmployeeModel {
  guid: string;
  name: string;
  lastName: string;
  email: string;
  avatar: string;
  age: number;
  gender: string;
  role: Roles;
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
  bloodPressureSYS: number;
  bloodPressureDIAS: number;
  drugAllergies: string[];
  nonDrugAllergies: string[];
  medications: string[];
  supplements: string[];
}

