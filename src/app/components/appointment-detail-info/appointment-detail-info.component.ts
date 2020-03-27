import { Component, Input, OnInit } from '@angular/core';

import { AppointmentModel } from '../../models/appointment.model';
import { SystemService } from '../../services/system.service';

@Component({
  selector: 'app-appointment-detail-info',
  templateUrl: './appointment-detail-info.component.html',
  styleUrls: ['./appointment-detail-info.component.css']
})
export class AppointmentDetailInfoComponent implements OnInit {
  @Input() appointment: AppointmentModel;

  constructor(public systemService: SystemService) { }

  ngOnInit(): void {
  }

  async exportToPDF(event) {
   await this.systemService.printToPDF(event);
  }

}
