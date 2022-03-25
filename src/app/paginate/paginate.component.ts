import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-paginate',
  templateUrl: './paginate.component.html',
  styleUrls: ['./paginate.component.scss']
})
export class PaginateComponent implements OnInit {

  @Output() setPaginate: EventEmitter<{ start: number; end: number }> = new EventEmitter();

  pages: number[] = []; // pages num
  perPage: number; // number car(s) per page variable d'env
  total: any = 0; // total cars
  numberPages = 0;
  currentPage!: number;

  constructor(private carService: CarService) {
    this.perPage = 2;
   }

  ngOnInit(): void {
    this.init();
  }

  /**
   * init paginate
   * @param page
   */
   init(page: number = 1) {
    this.carService.count().subscribe(count => {
      this.numberPages = Math.ceil(count / this.perPage);
      this.currentPage = page;
      this.pages = [];
      for (let i = 1; i < this.numberPages + 1; i++) {
        this.pages.push(i);
      }
    })
  }

selectedPage(page: number) {
  this.currentPage = page;
  this.setPaginate.emit(this.paginate(page));
}

next() {
  if (this.currentPage >= this.numberPages) {
    this.currentPage = 1;
  } else {
    this.currentPage++;
  }
  this.setPaginate.emit(this.paginate(this.currentPage));
}

previous() {
  if (this.currentPage === 1) {
    this.currentPage = this.numberPages;
  } else {
    this.currentPage--;
  }
  this.setPaginate.emit(this.paginate(this.currentPage));

}

paginate(page: number): { start: number, end: number } {
  const start = (page - 1) * this.perPage;
  const end = start + this.perPage;

  return { start: start, end: end };
}

}