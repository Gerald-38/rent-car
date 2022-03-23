import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Car } from './car';
// Service et classe utile
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Opérateurs de RxJS
import { map } from 'rxjs/operators';
// libraire utile pour le traitement de données
import * as _ from 'lodash';

// définition des headers
  const httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    })
  };

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private cars: Car | undefined;
  private carsUrl = 'https://cars-32f4e-default-rtdb.europe-west1.firebasedatabase.app/cars'

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.carsUrl + '/.json', httpOptions).pipe(
    // Préparation des données avec _.values pour avoir un format exploitable dans l'applimap(albums => _.values(albums)),
    // Ordonnez les albums par ordre de durées décroissantes
    map(cars => cars)
  )
}
  



}
