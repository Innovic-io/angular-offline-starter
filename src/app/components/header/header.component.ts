import { Component, Input, OnInit } from '@angular/core';
import { faHospitalSymbol, faFile, faUser, faCalendarAlt, faComments, faHeart } from '@fortawesome/free-solid-svg-icons';
import { EmployeeModel } from '../../models/employee.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public faHospitalSymbol = faHospitalSymbol;
  public faFile = faFile;
  public faUser = faUser;
  public faCalendarAlt = faCalendarAlt;
  public faComments = faComments;
  public faHeart = faHeart;

  @Input() user: EmployeeModel;

  constructor() { }

  ngOnInit(): void {
  }

}
