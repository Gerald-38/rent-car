import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
import { CARS } from '../mock-cars';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  titlePage: string = "Véhicules proposés à la location";
  cars: Car[] = CARS;  

  constructor(private carService: CarService) { 
    this.carService.getCars()
   }

  ngOnInit(): void {

    this.cars= this.carService.getCars();
    console.log(this.cars);


  }

}
