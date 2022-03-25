import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from '../car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.scss']
})
export class UpdateCarComponent implements OnInit {

  car: Car | undefined;
  updateFormCar!: FormGroup;
  id!: string; 

  constructor(
    private route: ActivatedRoute,
    private carService: CarService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    const idParam = this.route.snapshot.paramMap.get('id'); // id dans l'url
    if(idParam)
    this.id = idParam;
    this.initUpdateForm(); // initialisation du formulaire
    
    // mise à jour du formulaire après l'instanciation de ce dernier
    this.carService.getCar(this.id).subscribe(car => {
    // on récupère l'instance du formulaire et on met à jour les champs du formulaire
    // avec la méthode patchValue du formGroup
    this.updateFormCar.patchValue(car);
  }
  );
    
  }
 
  initUpdateForm() {

    this.updateFormCar = this.fb.group(
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
          Validators.pattern('[0-9]*'),
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
  get brand() { return this.updateFormCar.get('brand'); }
  get type() { return this.updateFormCar.get('type'); }
  get power() { return this.updateFormCar.get('power'); }
  get price() { return this.updateFormCar.get('price'); }
  get description() { return this.updateFormCar.get('description'); }

  
  onSubmit(){
    let car : Car;
    car = this.updateFormCar.value;
    car.id = this.id;

    /**
     * @todo observer methods next and error 
     */
    this.carService.updateCar(car).subscribe(
      () => {
        this.router.navigate(['/admin'], { queryParams: { message: 'success updated resource' } });
      }
    )
  }
}

