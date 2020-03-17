import { MessageModel } from '../models/message.model';

export class MessageService {
  private messages: MessageModel[] = [];

  createMessage(message: MessageModel) {
    this.messages.push(message);
  }

  getAllDoctorEmails(doctorGUID: string) {
    const doctorMessages = this.messages.filter(message => message.doctorEmail.guid === doctorGUID);
    const lastMessages = [];

    for (const message of this.messages) {
      if (!message.replyTo) {
        message.conversation = [];
        message.conversation.push(message);

        let  guid = message.guid;
        let replayed;

        do {
          replayed = doctorMessages.find(dm => dm.replyTo === guid);
          if (replayed) {
            message.conversation.push(replayed);
            guid = replayed.guid;
          }
        }while (replayed);

        lastMessages.push(this.replaceLastWithFirst(message));
      }
    }
    return lastMessages;
  }

  private replaceLastWithFirst(message: MessageModel) {
    const last = message.conversation.pop();
    return Object.assign({}, message, last, {
      conversation: message.conversation
    });
  }

  updateArchive(messageGUID: string) {
    if (confirm('Are you sure you want to confirm?')) {
      return this.messages.find(message => message.guid === messageGUID).archive = true;
    }
  }

  deleteMessage(messageGUID: string) {
    if (confirm('Are you sure you want to confirm?')) {
      const messageIndex = this.messages.findIndex(message => message.guid === messageGUID);
      console.log(messageIndex);
      if (messageIndex > -1) {
        this.messages.splice(messageIndex, 1);
      }
      return this.messages;
    }
  }

  getEmail(messageGUID: string) {
    return this.messages.find(message => message.guid === messageGUID);
  }


}
