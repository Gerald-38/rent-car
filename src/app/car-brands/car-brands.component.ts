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

  constructor(private carService: CarService) {
        // this.carService.getCars()
        this.carService.getCars().subscribe(
          cars => this.cars = cars            
        ) 
        this.carService.getBrands().subscribe(
          brands => this.brands = brands
        )           
  }  

  // Créer un array des marques de voitures
  // dans le template d'abord boucler sur cet array pour afficher les voitures dont la marque est égale à l'élément de l'array

  ngOnInit(): void {
  
  }
}

// on définit un array des brands vide, on parcourt les brand, si la brand n'est pas dans l'array des brands on la pushe dedans