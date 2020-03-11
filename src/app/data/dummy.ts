import { EmployeeModel } from '../models/employee.model';
import { Roles } from '../models/system.models';
import { uuidv4 } from '../helpers/uuid';

export const doctor = new EmployeeModel();
doctor.guid = uuidv4();
doctor.name = 'Anya';
doctor.lastName = 'Bush';
doctor.middleName = 'Lola';
doctor.email = 'anyaa@gmail.com';
doctor.role = Roles.doctor;
doctor.gender = 'female';
doctor.workPhone = 2938291901;
doctor.state = 'Bosnia and Herzegovina';
doctor.city = 'Sarajevo';
doctor.address = 'Univerzitetska 9';
doctor.cellPhone = 39302022;
doctor.zip = 71420;
doctor.homePhone = 2839392;

