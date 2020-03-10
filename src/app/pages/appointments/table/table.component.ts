import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { AppointmentModel } from '../../../models/appointment.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() appointments: AppointmentModel[];
  @Output() checked = new EventEmitter<{ checked: boolean, guid: string }>();
  @Output() checkedArray = new EventEmitter<boolean>();
  ngOnInit(): void {}

  checkBox(event, appointmentGUID: string) {
    this.checked.emit({ checked: event, guid: appointmentGUID });
  }
  checkAll(event) {
    this.checkedArray.emit(event);
  }
}
