import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  @Output() resultInput = new EventEmitter<number>();
  firstNumber =  Math.floor(Math.random() * Math.floor(10));
  secondNumber = Math.floor(Math.random() * Math.floor(10));
  submitDisabled = true;

  form = {
    email: null
  };

constructor() { }

  ngOnInit(): void {
  }

  onChange(event) {
    // tslint:disable-next-line:radix
    const eventResult: number = parseInt(event.target.value);
    this.submitDisabled = (this.firstNumber + this.secondNumber) !== eventResult;
  }
}
