import { Component, Input } from '@angular/core';
import { Roles } from "../../models/system.models";

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent  {
  @Input() name: string;
  @Input() role: Roles;
}
