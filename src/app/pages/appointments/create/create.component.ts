import { Component, OnInit } from '@angular/core';

import { doctor } from '../../../data/dummy';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  providers = [doctor];

  constructor() { }

  ngOnInit(): void {
  }

}
