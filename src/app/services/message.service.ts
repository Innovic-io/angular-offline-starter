import {Injectable} from '@angular/core';
import {doctor} from '../data/dummy';
import {MessageModel} from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private messages: MessageModel[] = [];

  constructor() {
  }

  createMessage(message: MessageModel) {
    this.messages.push(message);
    console.log(message);
  }
}
