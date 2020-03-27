import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MessageModel } from '../../../models/message.model';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: [ './display-message.component.css' ]
})
export class DisplayMessageComponent {

  @Input() message: MessageModel;
  @Input() showButtons = true;
  @Output() updateAchieve = new EventEmitter<string>();
  @Output() deleteMessage = new EventEmitter<string>();
  @Output() convertToPDF = new EventEmitter<HTMLDivElement>();

  updateClick(guid) {
    this.updateAchieve.emit(guid);
  }

  deleteClick(guid) {
    this.deleteMessage.emit(guid);
  }

  exportToPDF(event) {
    this.convertToPDF.emit(event);
  }
}
