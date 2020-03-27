import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  private messageObserver: Subscriber<string>;
  private messageDangerObserver: Subscriber<string>;
  private readonly alertMessages$: Observable<string>;
  private readonly dangerAlertMessages$: Observable<string>;

  constructor() {
    this.alertMessages$ = new Observable<string>((observer) => {
      this.messageObserver = observer;
    });
    this.dangerAlertMessages$ = new Observable<string>((observer) => {
      this.messageDangerObserver = observer;
    });
  }

  printToPDF(printContents: HTMLDivElement) {
    let popupWin;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>${printContents.title}</title>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        </head>
    <body onload="window.print();window.close()">${printContents.innerHTML}</body>
      </html>`
    );
    popupWin.document.close();
  }

  createAlertMessage(message: string) {
    this.messageObserver.next(message);

    setTimeout(() => {
      this.messageObserver.next(null);
    }, 2000);
  }

  createDangerAlertMessage(message: string) {
    this.messageDangerObserver.next(message);

    setTimeout(() => {
      this.messageDangerObserver.next(null);
    }, 1000);
  }

  getMessage() {
    return this.alertMessages$;
  }

  getDangerMessage() {
    return this.dangerAlertMessages$;
  }
}
