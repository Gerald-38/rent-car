import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  titlePage: string = "Véhicules proposés à la location";
  cars: Car[] | undefined ;  

  constructor(private carService: CarService) { 
    // this.carService.getCars()
    console.log(this.carService.getCars().subscribe(
      cars => this.cars = cars
      ))
   }

  ngOnInit(): void {

    // this.cars= this.carService.getCars();
    // console.log(this.cars);


  }

}
