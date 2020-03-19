import { Component, OnInit } from '@angular/core';
import { ContactModel, EmergencyModel, EmployeeModel } from '../../models/employee.model';
import { EmployeeService } from '../../services/employee.service';
import { SystemService } from '../../services/system.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {
  currentUser$: Observable<EmployeeModel>;

  constructor(public employeeService: EmployeeService, public systemService: SystemService) { }
  emitDivName(event) {
    this.systemService.exportAsPDF(event, 'My profile');
  }

  ngOnInit(): void {
    this.currentUser$ = this.employeeService.getLoggedEmployee$();
  }

  onUpdateEmployee(employee: EmployeeModel | ContactModel | EmergencyModel, type: string) {
    this.employeeService.updateEmployee(employee, type);
    this.systemService.createAlertMessage('Profile is updated!');
  }

  onUpdateAvatar(avatarURL: string) {
    this.employeeService.updateEmployeeAvatar(avatarURL);
    this.systemService.createAlertMessage('Avatar is updated!');
  }


}
