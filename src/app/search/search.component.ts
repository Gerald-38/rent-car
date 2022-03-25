import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms'; // template-driven
import { CarService } from '../car.service';
import { Car } from '../car';

@Component({
selector: 'app-search',
templateUrl: './search.component.html',
styleUrls: ['./search.component.scss']
})



export class SearchComponent implements OnInit {
  value = 'Entrez une marque';

  @Output() searchCars: EventEmitter<Car[]> = new EventEmitter(); // émission des données vers le parent

  constructor(private carService: CarService) { }

mySearch: any;

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    this.carService.search(form.value['word']).subscribe(
      cars => {
        if (cars.length > 0) this.searchCars.emit(cars);
      }
    )
  }  


}