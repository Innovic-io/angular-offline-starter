import { Injectable } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class SystemService {
  private messageObserver: Subscriber<string>;
  private readonly alertMessages$: Observable<string>;

  constructor() {
    this.alertMessages$ = new Observable<string>((observer) => {
      this.messageObserver = observer;
    });
  }
  exportAsPDF(data: HTMLDivElement, name: string) {
    html2canvas(data).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jspdf('l', 'cm', 'a4'); // Generates PDF in landscape mode
      // const pdf = new jspdf('p', 'cm', 'a4'); // Generates PDF in portrait mode
      pdf.addImage(contentDataURL, 'PNG', 0, 0, 29.7, 21.0);
      pdf.save(name);
    });
  }

  createAlertMessage(message: string) {
    this.messageObserver.next(message);

    setTimeout(() => {
      this.messageObserver.next(null);
    }, 2000);
  }

  getMessage() {
    return this.alertMessages$;
  }
}
