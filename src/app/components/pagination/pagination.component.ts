import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PaginationService } from '../../services/pagination.service';
import { DatabaseService } from '../../services/database.service';


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

  constructor(public paginationService: PaginationService, public databaseService: DatabaseService) { }

  ngOnInit(): void {
   this.pager = this.paginationService.getPager(this.total, this.currentPage || 1, this.perPage);

   setTimeout(() => {
      this.page.emit(this.pager);
    }, 250);
  }

  setPage(page) {
    this.pager = this.paginationService.getPager(this.total, page, this.perPage);
    this.page.emit(this.pager);
  }
}
