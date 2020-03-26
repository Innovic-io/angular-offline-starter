import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { MessageModel } from '../../../models/message.model';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.css']
})
export class DisplayMessageComponent {

  @Input() message: MessageModel;
  @Output() updateAchieve = new EventEmitter<string>();
  @Output() deleteMessage = new EventEmitter<string>();
  @Output() convertToPDF = new EventEmitter<HTMLDivElement>();
  @Input() showButtons = true;

  updateClick(guid) {
    this.updateAchieve.emit(guid);
  }

  deleteClick(guid) {
    this.deleteMessage.emit(guid);
  }

  exportToPDF(event) {
    this.convertToPDF.emit(event);
  }
  print(): void { // lijpo napisati, i prebaciti u service, al radi
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
          <style>
          //........Customized style.......
          </style>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }

}
