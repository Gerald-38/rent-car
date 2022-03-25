import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Car } from './car';
import { CarsComponent } from './cars/cars.component';
// Service et classe utile
import { HttpClient, HttpHeaders } from '@angular/common/http';
// Opérateurs de RxJS
import { map } from 'rxjs/operators';
// libraire utile pour le traitement de données
import * as _ from 'lodash';
// import { createSecretKey } from 'crypto';

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

  private cars: Car[] | undefined;
  private carsUrl = 'https://cars-32f4e-default-rtdb.europe-west1.firebasedatabase.app/cars'
 
  sendCurrentNumberPage = new Subject<number>(); // pour mettre à jour la pagination 
   

  constructor(private http: HttpClient) { }

    // retourne la liste des cars avec pagination 
    paginate(start: number, end: number): Observable<Car[]> {

      // Vous devez faire le mapping avant la récupération des données
      return this.http.get<Car[]>(this.carsUrl + '/.json', httpOptions).pipe(
        // Préparation des données pour avoir un format exploitable dans l'application
        // JSON en Array JSON
        map(cars => {
          let Cars: Car[] = [];
          cars.forEach((v: Car, k: any) => {
            v.id = k;
            Cars.push(v);
          });  
          return Cars;
        }),
        map(cars => {
          return cars.slice(start, end); // slicing des données
        })
      )
    }

    // compte le nombre de cars
    count(): Observable<number> {  
      return this.http.get<Car[]>(this.carsUrl + '/.json').pipe(
        map(cars => cars.length),
      );
    }

    currentPage(page: number) {
      return this.sendCurrentNumberPage.next(page);
    }

    getCars(): Observable<Car[]> {
      return this.http.get<Car[]>(this.carsUrl + '/.json', httpOptions).pipe(
        map(cars => cars)
      )
    }
    

    getCar(id: string): Observable<Car> {
      return this.http.get<Car>(this.carsUrl + `/${id}/.json`).pipe(
      map(car => car) // JSON
      );
    }

    getBrands(): Observable<Car> {
      return this.http.get<Car[]>(this.carsUrl + '/.json', httpOptions).pipe(
      // On map laliste des voitures pour créer un array des marques
      map(cars => {
        let brands: any = [];
        cars.forEach((v: Car) => {
          if (brands.indexOf(v.brand) < 0) {
            brands.push(v.brand);
          }        
        });
        return brands;
      }),
      )
    }

    // méthode search
    search(word: string): Observable<Car[]> {

      return this.http.get<Car[]>(this.carsUrl + '/.json', httpOptions).pipe(
        map(cars => {
          let search: Car[] = [];
          let re = new RegExp('^' + word.trim())
          cars.forEach((v: Car, k: any) => {
            v.id = k;
            if (v.brand.match(re) != null) search.push(v);
          })
          return search;
        })
      );
    }

    updateCar(car: Car): Observable<void> {
      return this.http.put<void>(this.carsUrl + `/${car.id}/.json`, car);
    }

    addCar(car: Car): Observable<void> {
      return this.http.post<void>(this.carsUrl + '/.json', car);
    }

    deleteCar(car: Car): Observable<void> {
      return this.http.delete<void>(this.carsUrl + `/${car.id}/.json`);
    }



  






}
