import { Component, OnInit } from '@angular/core';
import { Car } from '../car';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-model',
  templateUrl: './car-model.component.html',
  styleUrls: ['./car-model.component.scss']
})
export class CarModelComponent implements OnInit {

  car: Car | undefined;
  id: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id  = this.route.snapshot.paramMap.get('id');
    // if(id)
    // this.car = this.aS.getAlbum(id);
  }

}
