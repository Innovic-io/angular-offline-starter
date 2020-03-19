import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppointmentModel } from '../../models/appointment.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-invoice-information',
  templateUrl: './invoice-information.component.html',
  styleUrls: ['./invoice-information.component.css']
})
export class InvoiceInformationComponent implements OnInit {
  @Input() appointment: AppointmentModel;
  @Output() update = new EventEmitter<AppointmentModel>();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.update.emit(form.value);
    }
  }

}
