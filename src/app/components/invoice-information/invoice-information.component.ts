import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AppointmentModel } from '../../models/appointment.model';
import { NgForm } from '@angular/forms';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-invoice-information',
  templateUrl: './invoice-information.component.html',
  styleUrls: ['./invoice-information.component.css']
})
export class InvoiceInformationComponent implements OnInit {
  @Input() appointment: AppointmentModel;
  @Output() update = new EventEmitter<AppointmentModel>();
  public diagnosisView = false;

  constructor(public systemService: SystemService) { }

  checkForInvoice() {
    if (this.appointment.invoice === undefined ) {
      this.diagnosisView = false;
    } else {
      this.diagnosisView = true;
    }
    return this.diagnosisView;
  }

  ngOnInit(): void {
    this.checkForInvoice();
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.update.emit(form.value);
      this.checkForInvoice();
    }
  }

  toggle() {
    this.diagnosisView = !this.diagnosisView;
  }

  exportToPDF(event, name) {
    console.log(event, name);
    this.systemService.exportAsPDF(event, name);
  }

}
