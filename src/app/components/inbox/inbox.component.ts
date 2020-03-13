import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageModel } from '../../models/message.model';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {
  @Input() messages: MessageModel[];
  @Output() updateAchieve = new EventEmitter<string>();
  @Output() deleteMessage = new EventEmitter<string>();
  @Output() textToSearch = new EventEmitter<string>();
  @Output() replyOnEmail = new EventEmitter<string>();
  @Input() searchText: string;

  onClick(guid) {
    this.updateAchieve.emit(guid);
  }

  deleteClick(guid) {
    this.deleteMessage.emit(guid);
  }
  onSearch(event) {
    this.searchText = event;
  }

}
