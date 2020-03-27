import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PaginationService } from '../../services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {
  pager: any = {};
  totalItems: number;
  @Input() perPage: number;
  @Input() currentPage: number;
  @Input() set total(data: number) {
    if (data) {
      this.totalItems = data;
      this.pager = this.paginationService.getPager(this.totalItems, this.currentPage || 1, this.perPage);

      setTimeout(() => {
        this.page.emit(this.pager);
      }, 250);
    }
  }
  @Output() page = new EventEmitter<number>();

  constructor(public paginationService: PaginationService) {
  }

  setPage(page) {
    this.pager = this.paginationService.getPager(this.totalItems, page, this.perPage);
    this.page.emit(this.pager);
  }
}
