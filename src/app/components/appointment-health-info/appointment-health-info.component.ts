import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { HealthInfoModel } from '../../models/employee.model';

@Component({
  selector: 'app-appointment-health-info',
  templateUrl: './appointment-health-info.component.html',
  styleUrls: ['./appointment-health-info.component.css']
})
export class AppointmentHealthInfoComponent implements OnInit {
  appointmentHealthInfo = new HealthInfoModel();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (form.valid) {

    }
  }

}
