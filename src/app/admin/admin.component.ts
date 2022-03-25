import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from '../car';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  cars: Car[] | undefined ;
  selectedCar!: Car;
  message!: string;

  constructor(private carService: CarService, private router: Router) {
      // this.carService.getCars()
      this.carService.getCars().subscribe(
        cars => this.cars = cars            
      ) 
  }

  ngOnInit(): void {

  }

  onDelete(car: Car) {
    if (confirm('Voulez-vous vraiment supprimer cette ressource ?')) {
      let type: string = car.type;
      this.message = `LA voiture  ${type} a bien été supprimée`;
      console.log(car, 'DELETE CAR CAR')

      this.carService.deleteCar(car).subscribe(
        () => {       
          this.router.navigate(['/admin']); 
          location.reload();
        }
      )
    }
  }

}
