import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
    constructor(public afAuth:AngularFireAuth) { }

    ngOnInit(): void {
    }

    signIn(){
      const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
      this.afAuth.signInWithPopup(googleAuthProvider);
    }
  
    signOut(){
      this.afAuth.signOut();
    }
}
