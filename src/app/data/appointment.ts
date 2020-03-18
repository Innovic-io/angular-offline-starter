import { AppointmentModel } from '../models/appointment.model';
import { uuidv4 } from '../helpers/uuid';
import { AppointmentType } from '../models/system.models';
import { doctor } from './dummy';
import { MessageModel } from '../models/message.model';

export function generatePastAppointments(len) {
  const generated = [];

  for (let i = 1 ; i < len; i++) {
    const appointment = new AppointmentModel();
    appointment.guid = uuidv4();
    appointment.firstName = 'User' + i;
    appointment.lastName = 'Last' + i;
    const date = new Date();
    date.setDate(date.getDate() - i);
    appointment.date = date;
    appointment.email = 'example@gmail.com';
    appointment.appType = AppointmentType.consultation;
    appointment.provider = doctor;
    appointment.notes = 'Notes';
    appointment.phone = '232432432432432432';

    generated.push(appointment);

  }
  return generated;
}

export function generateUppcomingAppointments(len) {
  const generated = [];

  for (let i = 0; i < len; i++) {
    const appointment = new AppointmentModel();
    appointment.guid = uuidv4();
    appointment.firstName = 'User' + i;
    appointment.lastName = 'Last' + i;
    const date = new Date();
    date.setDate(date.getDate() + i);
    appointment.date = date;
    appointment.email = 'example@gmail.com';
    appointment.appType = AppointmentType.consultation;
    appointment.provider = doctor;
    appointment.notes = 'Notes';
    appointment.phone = '232432432432432432';

    generated.push(appointment);

  }
  return generated;
}

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
