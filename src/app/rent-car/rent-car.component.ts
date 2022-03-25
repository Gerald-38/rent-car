import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rent-car',
  templateUrl: './rent-car.component.html',
  styleUrls: ['./rent-car.component.scss']
})
export class RentCarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  onSubmit(form: NgForm): void {
    alert("Merci ! Vous allez etre contacté par nos services !")
  }

}
