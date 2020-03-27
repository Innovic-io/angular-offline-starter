import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: [ './success.component.css' ]
})
export class SuccessComponent {
  @Input() title: string;
}
