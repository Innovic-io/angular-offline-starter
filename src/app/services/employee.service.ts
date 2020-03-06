import { Injectable } from '@angular/core';
import {doctor} from "../data/dummy";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getLoggedEmployee(doctorGUID: string) {
    if(doctor.guid !== doctorGUID) {
      console.log("User is not logged!")
    }
    else {
      return doctor;
    }

  }
}
