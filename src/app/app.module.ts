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
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    CarsComponent,
    LoginComponent,
    CarModelComponent,
    CarBrandsComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(carsRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
