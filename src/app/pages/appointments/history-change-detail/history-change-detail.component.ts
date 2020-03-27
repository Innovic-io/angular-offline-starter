import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AppointmentModel, HistoryChanges, HistoryModel } from '../../../models/appointment.model';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-history-change-detail',
  templateUrl: './history-change-detail.component.html',
  styleUrls: ['./history-change-detail.component.css']
})
export class HistoryChangeDetailComponent implements OnInit {
  healthInfo = HistoryModel.healthInfo;
  diagnosis = HistoryModel.diagnosis;
  invoice = HistoryModel.invoice;
  appointment: AppointmentModel;
  appointmentHistoryChange: HistoryChanges;

  constructor(public location: Location, public route: ActivatedRoute, public appointmentService: AppointmentService) { }

  onBack() {
    this.location.back();
  }

  async ngOnInit() {
    const { id, historyId } = this.route.snapshot.params;
    this.appointmentHistoryChange = await this.appointmentService.getHistoryChangeByID(id, historyId);
  }


}
