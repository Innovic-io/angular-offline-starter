import { Component, Input, OnInit } from '@angular/core';
import { AppointmentModel } from '../../models/appointment.model';

@Component({
  selector: 'app-history-changes',
  templateUrl: './history-changes.component.html',
  styleUrls: ['./history-changes.component.css']
})
export class HistoryChangesComponent implements OnInit {
  @Input() appointment: AppointmentModel;

  constructor() { }

  ngOnInit(): void {
  }

}
