import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AppointmentModel } from '../../models/appointment.model';
import { NgForm } from '@angular/forms';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: [ './diagnosis.component.css' ]
})
export class DiagnosisComponent implements OnInit {
  public diagnosisView = false;
  @Input() appointment: AppointmentModel;
  @Output() update = new EventEmitter<AppointmentModel>();

  constructor(public systemService: SystemService) {
  }

  checkForDiagnosis() {
    if (this.appointment.diagnosis === undefined) {
      this.diagnosisView = false;
    } else {
      this.diagnosisView = true;
    }

    return this.diagnosisView;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.update.emit(form.value);
      this.checkForDiagnosis();
    }
  }

  toggle() {
    this.diagnosisView = !this.diagnosisView;
  }

  async exportToPDF(event) {
    await this.systemService.printToPDF(event);
  }

  ngOnInit(): void {
    this.checkForDiagnosis();
  }
}
