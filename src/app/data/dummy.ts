import { EmployeeModel } from '../models/employee.model';
import { Relationship, Roles } from '../models/system.models';
import { uuidv4 } from '../helpers/uuid';

export const doctor = new EmployeeModel();
doctor.guid = uuidv4();
doctor.name = 'Anya';
doctor.lastName = 'Bush';
doctor.password = 'password';
doctor.middleName = 'Lola';
doctor.contact.email = 'anyaa@gmail.com';
doctor.age = 23;
doctor.role = Roles.doctor;
doctor.gender = 'female';
doctor.dateOfBirth = new Date('03/12/1997');
doctor.contact.workPhone = 2938291901;
doctor.contact.state = 'Bosnia and Herzegovina';
doctor.contact.city = 'Sarajevo';
doctor.contact.address = 'Univerzitetska 9';
doctor.contact.cellPhone = 39302022;
doctor.contact.zip = 71420;
doctor.contact.homePhone = 2839392;
// tslint:disable-next-line:max-line-length
doctor.avatar = 'https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170524444/78443570-a-female-doctor-avatar-character-vector-illustration-design.jpg';
doctor.emergencyPerson.relationship = Relationship.family;
doctor.emergencyPerson.address = 'Univerzitetska 9';
doctor.emergencyPerson.phone = 28392929;
doctor.emergencyPerson.name = 'Neco';
doctor.emergencyPerson.city = 'Sarajevo';
doctor.emergencyPerson.email = 'neco@gmail.com';
doctor.emergencyPerson.lastName = 'Bush';
doctor.emergencyPerson.middleName = 'Nele';

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
doctor.healthInfo.supplements = ['Fish Oil', 'Vitamin A+D', 'Vitamin B'];

