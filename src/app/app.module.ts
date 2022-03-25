import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarsComponent } from './cars/cars.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CarModelComponent } from './car-model/car-model.component';
import { CarBrandsComponent } from './car-brands/car-brands.component';
import { AdminComponent } from './admin/admin.component'; // module des routes et classe de Tyimport { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { GuardService } from './guard.service';
import firebase from 'firebase/compat/app';
import { UpdateCarComponent } from './update-car/update-car.component';
import { AddCarComponent } from './add-car/add-car.component';
import { PaginateComponent } from './paginate/paginate.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { SearchComponent } from './search/search.component';

// import * as firebase from 'firebase/compat';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2ldpWXZ84EsUAWYILK3LoC7gSmOOluaU",
  authDomain: "cars-32f4e.firebaseapp.com",
  databaseURL: "https://cars-32f4e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "cars-32f4e",
  storageBucket: "cars-32f4e.appspot.com",
  messagingSenderId: "113595221180",
  appId: "1:113595221180:web:4bccff72d62d9c76f6fcb9",
  measurementId: "G-VV5K3MCJWX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const carsRoutes: Routes = [
  {
  path: 'cars',
  component: CarsComponent
  },
  {
  path: '',
  redirectTo: '/cars',
  pathMatch: 'full'
  },
  {
  path: 'login',
  component: LoginComponent
  },
  {
  path: 'car/:id',
  component: CarModelComponent
  },
  {
    path: 'brands',
    component: CarBrandsComponent
  },
  {
    path: 'admin', 
    component: AdminComponent
  },
  {
    path: 'add', canActivate: [GuardService],
    component: AddCarComponent
  },
  {
    path: 'update/:id', canActivate: [GuardService],
    component: UpdateCarComponent
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    LoginComponent,
    CarModelComponent,
    CarBrandsComponent,
    AdminComponent,
    UpdateCarComponent,
    AddCarComponent,
    PaginateComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(carsRoutes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule ,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
