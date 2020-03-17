import { MessageModel } from '../models/message.model';
import { uuidv4 } from '../helpers/uuid';
import { doctor } from './dummy';

export function generateMessages(len) {
  const generated = [];
  let replyTo = null;
  for (let i = 0; i < len; i++) {
    const message = new MessageModel();
    message.guid = uuidv4();
    message.doctorMessage = 'Message' + i;
    message.subject = 'Subject' + i;
    const date = new Date();
    date.setDate(date.getDate() + i);
    message.date = date;
    message.recipient = 'w@gmail.com';
    message.doctorEmail = doctor;
    message.replyTo = replyTo;
    replyTo = message.guid;
    message.archive = false;
    message.urgent = false;
    generated.push(message);
  }

  return generated;
}
