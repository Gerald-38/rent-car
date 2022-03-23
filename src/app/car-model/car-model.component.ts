import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss']
})
export class CarModelComponent implements OnInit {

  car!: Car;


  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id)
    // if(id)
    // this.car = this.aS.getAlbum(id);
    if (id) {  
      this.carService.getCar(id).subscribe(
        car => this.car = car        
      )
    }
  }

}
