import { EmployeeModel } from '../models/employee.model';
import { Roles } from '../models/system.models';
import { uuidv4 } from '../helpers/uuid';

export const doctor = new EmployeeModel();
doctor.guid = uuidv4();
doctor.name = 'Anya';
doctor.lastName = 'Bush';
doctor.middleName = 'Lola';
doctor.email = 'anyaa@gmail.com';
doctor.age = 23;
doctor.role = Roles.doctor;
doctor.gender = 'Female';
doctor.workPhone = 2938291901;
doctor.state = 'Bosnia and Herzegovina';
doctor.city = 'Sarajevo';
doctor.address = 'Univerzitetska 9';
doctor.cellPhone = 39302022;
doctor.zip = 71420;
doctor.homePhone = 2839392;

doctor.healthInfo.height = 160;
doctor.healthInfo.weight = 54;
doctor.healthInfo.bloodType = 'B+';
doctor.healthInfo.temperature = 36.5;
doctor.healthInfo.heartRate = 79;
doctor.healthInfo.bloodPressure = 'Normal';
doctor.healthInfo.bloodPressureSYS = 120;
doctor.healthInfo.bloodPressureDIAS = 80;
doctor.healthInfo.drugAllergies = ['Penicillin', 'Sulfa'];
doctor.healthInfo.nonDrugAllergies = ['Nuts', 'Diary'];
doctor.healthInfo.medications = ['Allegra D (OTC)'];
doctor.healthInfo.supplements = ['Fish Oil', 'Vitamin A+D'];

