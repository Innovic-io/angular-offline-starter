import { EmployeeModel } from '../models/employee.model';
import { Roles } from '../models/system.models';
import { uuidv4 } from '../helpers/uuid';

export const doctor = new EmployeeModel();

doctor.guid = uuidv4();
doctor.name = 'Anya';
doctor.lastName = 'Dan';
doctor.age = 23;
doctor.email = 'anyaa@gmail.com';
doctor.role = Roles.doctor;
doctor.gender = 'Female';
doctor.healthInfo.height = 160;

