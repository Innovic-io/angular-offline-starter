import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AppointmentModel } from '../../models/appointment.model';
import { NgForm } from '@angular/forms';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-diagnosis',
  templateUrl: './diagnosis.component.html',
  styleUrls: ['./diagnosis.component.css']
})
export class DiagnosisComponent implements OnInit {
  @Input() appointment: AppointmentModel;
  @Output() update = new EventEmitter<AppointmentModel>();
  public diagnosisView = false;

  constructor(public systemService: SystemService) { }

  checkForDiagnosis() {
    if (this.appointment.diagnosis.diagnosisText === undefined ) {
      this.diagnosisView = false;
    } else {
      this.diagnosisView = true;
    }
    return this.diagnosisView;
  }

  ngOnInit(): void {
    this.checkForDiagnosis();
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

  exportToPDF(event, name) {
    this.systemService.exportAsPDF(event, name);
  }
}
