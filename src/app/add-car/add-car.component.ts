import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.scss']
})
export class AddCarComponent implements OnInit {

  carForm!: FormGroup ;

  constructor(
    private fb: FormBuilder,
    private carService: CarService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    const CarStub: Car = {
      id: "",
      brand: 'Voiture',
      type: 'modele',
      power: 100,
      description: '',
      price: '100',
      wifi: true,
      image: ''
    }
    this.carForm = this.fb.group(
      {        id : 0,
        brand: new FormControl('', [
          Validators.required,
          Validators.minLength(5)
        ]),
        type: new FormControl('', [
          Validators.required
        ]),
        power: new FormControl('', [
          Validators.required,
        ]),
        price: new FormControl('', [
          Validators.required
        ]),
        description: new FormControl('', [
          Validators.required,
          Validators.max(900)
        ]),
        wifi: new FormControl('', [
          Validators.required,
        ]),
        image: new FormControl('', [
          Validators.required,
        ]),        

      }
    );
  }

    // getter pour la validation dans le formulaire errors
    get brand() {
      return this.carForm.get('name');
    }
    get type() {
      return this.carForm.get('title');
    }
    get price() { return this.carForm.get('ref'); 
    }
    get description() { return this.carForm.get('duration'); 
    }

  onSubmit() {
    let car: Car = {
      id: "",
      brand: this.carForm.value['brand'],
      type: this.carForm.value['type'],
      price: this.carForm.value['price'],
      description: this.carForm.value['description'],
      wifi: this.carForm.value['wifi'],
      image: "",
      power: 0
    }

    // HttpClient Observable se désinscrit tout seul après avoir terminé son action
    // get, post, put, ...
    this.carService.addCar(car).subscribe(
      () => {
        this.router.navigate(['/admin'], { queryParams: { message: 'success' } });
      }
    );
  }
    
  

}
