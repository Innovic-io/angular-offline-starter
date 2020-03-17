import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PaginationService } from '../../services/pagination.service';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() total: number;
  @Input() perPage: number;
  @Input() currentPage: number;
  @Output() page = new EventEmitter<number>();
  pager: any = {};

  constructor(public paginationService: PaginationService) {
  }

  ngOnInit(): void {
    this.pager = this.paginationService.getPager(this.total, this.currentPage, this.perPage);
  }

  setPage(page) {
    console.log(page);
    this.page.emit(page);
  }
}
