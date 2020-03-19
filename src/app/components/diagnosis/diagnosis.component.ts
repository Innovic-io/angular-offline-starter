import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppointmentModel } from '../../models/appointment.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
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
