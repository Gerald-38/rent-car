import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
  animations: [
    trigger('details', [
      state('open', style({
        width : '60%'
      })),
      state('opening', style({
        width : '0%',
      })),
      transition('opening => open', [
        animate('1.5s')
      ]),
    ]),
  ],
})
export class CarsComponent implements OnInit {

  titlePage: string = "Véhicules proposés à la location";
  cars!: Car[];  
  isOpen : boolean = false;
  carsNumber: any;
  count: any;


  constructor(private carService: CarService) { 
    console.log(this.carService.getCars().subscribe(
      cars => console.log('*-*-*-*-*-*-*', cars) 
    ))
  }

  ngOnInit(){

    this.carService.paginate(0, 5).subscribe(cars => this.cars = cars);
    this.count = this.carService.count().subscribe(
      count => this.count = count
    ); 

    // animation 
    this.isOpen = false;
    const animate = setInterval( () => {
      this.isOpen = ! this.isOpen;
      clearInterval(animate);
    }
      , 10); 
  }

  search($event: any){
    if($event) this.cars = $event;
  }

  // mise à jour de la pagination
  paginate(car: { start: number; end: number; }) {
    console.log(car);
    this.carService.paginate(car.start, car.end).subscribe(
            cars => this.cars = cars
    )
  }
}
