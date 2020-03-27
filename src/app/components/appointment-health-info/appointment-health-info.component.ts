import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AppointmentModel } from '../../models/appointment.model';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-appointment-health-info',
  templateUrl: './appointment-health-info.component.html',
  styleUrls: ['./appointment-health-info.component.css']
})
export class AppointmentHealthInfoComponent implements OnInit {
  @Input() appointment: AppointmentModel;
  @Output() update = new EventEmitter<AppointmentModel>();
  public diagnosisView: boolean;

  constructor(public systemService: SystemService) { }

  checkForHealthInfo() {
    if (this.appointment.appointmentHealthInfo === undefined ) {
    this.diagnosisView = false;
    } else {
      this.diagnosisView = true;
    }

    return this.diagnosisView;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.update.emit(form.value);
      this.checkForHealthInfo();
    }
  }

  toggle() {
    this.diagnosisView = !this.diagnosisView;
  }

  async exportToPDF(event) {
   await this.systemService.printToPDF(event);
  }

  ngOnInit(): void {
    this.checkForHealthInfo();
  }
}
