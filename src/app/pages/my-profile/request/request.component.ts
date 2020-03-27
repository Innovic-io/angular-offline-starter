import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent {
  firstNumber = Math.floor(Math.random() * Math.floor(10));
  secondNumber = Math.floor(Math.random() * Math.floor(10));
  submitDisabled = true;
  form = {
    email: null
  };
  @Output() resultInput = new EventEmitter<number>();

  onChange(event) {
    // tslint:disable-next-line:radix
    const eventResult: number = parseInt(event.target.value);
    this.submitDisabled = (this.firstNumber + this.secondNumber) !== eventResult;
  }
}
