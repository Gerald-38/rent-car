import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authState: boolean = false;

  constructor(private router: Router) { 
    firebase.auth().onAuthStateChanged( (user) => {
      if (user) {
        this.authState = true;
      } else {
        this.authState = false;
      }
    });
  }

  auth(email: string, password: string): Promise<any> {

    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {

    firebase.auth().signOut().then(
      () => {
        this.router.navigate(['/admin'], { queryParams: { message: `Success logout` } });
      }
    );
  }

  // Return true if user is logged in
  authenticated(): boolean {
    return this.authState == true;
  }
}
