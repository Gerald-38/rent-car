import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.scss']
})
export class RentCarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onCheck() {
    alert("Merci ! Vous allez etre contacté par nos services !")
  }

}
