import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AppointmentModel } from '../../models/appointment.model';

@Component({
  selector: 'app-appointment-health-info',
  templateUrl: './appointment-health-info.component.html',
  styleUrls: ['./appointment-health-info.component.css']
})
export class AppointmentHealthInfoComponent implements OnInit {
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
