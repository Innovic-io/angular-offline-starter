import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faHospitalSymbol, faFile, faUser, faCalendarAlt, faComments, faHeart } from '@fortawesome/free-solid-svg-icons';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public faHospitalSymbol = faHospitalSymbol;
  public faFile = faFile;
  public faUser = faUser;
  public faCalendarAlt = faCalendarAlt;
  public faComments = faComments;
  public faHeart = faHeart;
  @Output() logOutEvent = new EventEmitter();

  @Input() user: EmployeeModel;

  logOut(event) {
      this.logOutEvent.emit(event);
  }

}
