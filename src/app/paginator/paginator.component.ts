import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
    selector: 'app-paginator',
    templateUrl: 'paginator.component.html',
    styleUrls: ['./paginator.component.css']
})

export class PaginatorComponent implements OnInit {
    constructor(private commonService: CommonService) { }
    @Input() data: [];
    @Output() slicedTable = new EventEmitter();

    pager: any = {};
    ngOnInit() { 
      this.setPage(1);
    }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    this.pager = this.commonService.getPager(this.data.length, page);
    this.slicedTable.emit(this.data.slice(this.pager.startIndex, this.pager.endIndex + 1));
  }
}