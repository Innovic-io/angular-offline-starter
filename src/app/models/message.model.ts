import {uuidv4} from '../helpers/uuid';
import { EmployeeModel } from './employee.model';


export class MessageModel {
  guid: string;
  date: Date = new Date();
  doctorEmail: EmployeeModel;
  recipient: string;
  subject: string;
  doctorMessage: string;
  urgent: boolean;
  archive: boolean;
  replyTo: string;
  conversation: MessageModel[];

  constructor() {
    this.guid = uuidv4();
    this.doctorEmail = new EmployeeModel();
    this.urgent = false;
    this.archive = false;
  }
}
