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

 async exportAsPDF(data: HTMLDivElement, name: string) {
    const canvas = await html2canvas(data);
    const contentDataURL =  canvas.toDataURL('image/png');
    const pdf =  new jspdf({orientation: 'portrait'});
    const imgProps = pdf.getImageProperties(contentDataURL);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
    pdf.addImage(contentDataURL, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save(name);
  }
  async printToPDF(data: HTMLDivElement) {
    let printContents;
    let popupWin;
    printContents = document.getElementById(data.id).innerHTML;
    console.log(data);
    console.log(printContents);
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
          <title>Print tab</title>
        </head>
    <body onload="window.print();window.close()">${printContents}</body>
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
