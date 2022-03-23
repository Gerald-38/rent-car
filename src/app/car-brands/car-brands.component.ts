import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-brands',
  templateUrl: './car-brands.component.html',
  styleUrls: ['./car-brands.component.scss']
})
export class CarBrandsComponent implements OnInit {

  cars: Car[] | undefined ;
  brands: any;
  
  titlePage = "Marques proposées en location"

  //  On récupère la liste des marques et des voitures pour ventiler l'affichage des voitures par marque dans le template

  constructor(private carService: CarService) {
        // this.carService.getCars()
        this.carService.getCars().subscribe(
          cars => this.cars = cars            
        ) 
        this.carService.getBrands().subscribe(
          brands => this.brands = brands
        )           
  }  

  ngOnInit(): void {
  
  }
}

