import {uuidv4} from '../helpers/uuid';


export class MessageModel {
  guid: string;
  date: Date = new Date();
  doctorEmail: string;
  recipient: string;
  subject: string;
  patientMessage: string;
  urgent: boolean;

  constructor() {
    this.guid = uuidv4();
    this.urgent = false;
  }
}
