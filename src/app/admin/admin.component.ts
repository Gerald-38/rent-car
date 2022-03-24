import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  cars: Car[] | undefined ;

  constructor(private carService: CarService) {
      // this.carService.getCars()
      this.carService.getCars().subscribe(
        cars => this.cars = cars            
      ) 
  }

  ngOnInit(): void {
  }

}
