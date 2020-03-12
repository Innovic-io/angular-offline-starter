import { Injectable } from '@angular/core';
import { MessageModel } from '../models/message.model';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  private alertMessages: string[] = [];

  createAlertMessage(message: string) {
    this.alertMessages.push(message);
    console.log(this.alertMessages);
  }
}
