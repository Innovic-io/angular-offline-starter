import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-emergency-contact',
  templateUrl: './emergency-contact.component.html',
  styleUrls: ['./emergency-contact.component.css']
})
export class EmergencyContactComponent {
  @Input() email: string;
  @Input() address: string;
  @Input() cellPhone: number;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() middleName: string;
  @Input() city: string;

}
