import {Component, Input, OnInit } from '@angular/core';
import { AppointmentModel } from '../../../models/appointment.model';
import { AppointmentType } from '../../../models/system.models';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() appointments: AppointmentModel[];
  @Input() status: AppointmentType;

  ngOnInit(): void {
  }

}
