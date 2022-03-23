import { Injectable } from '@angular/core';
import { Car } from './car';
import { CARS } from './mock-cars'; 

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars: Car[] = CARS; // _ convention private et protected

  constructor() { }

  getCars(): Car[] {

    return this.cars;
  }



}
