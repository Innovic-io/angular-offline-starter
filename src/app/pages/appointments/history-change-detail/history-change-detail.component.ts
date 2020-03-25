import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HistoryChanges } from '../../../models/appointment.model';
import { AppointmentService } from '../../../services/appointment.service';

@Component({
  selector: 'app-history-change-detail',
  templateUrl: './history-change-detail.component.html',
  styleUrls: ['./history-change-detail.component.css']
})
export class HistoryChangeDetailComponent implements OnInit {
  appointmentHistory: HistoryChanges;

  constructor(public location: Location, public route: ActivatedRoute, public appointmentService: AppointmentService) { }

  ngOnInit(): void {
    const { id } = this.route.snapshot.params;
    console.log(id);
    
    // this.appointmentHistory = this.appointmentService.getHistoryChangeByID(id);
  }

  onBack() {
    this.location.back();
  }
}
