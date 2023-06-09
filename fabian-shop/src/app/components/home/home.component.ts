import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private breakpointObserver: BreakpointObserver,public dialog: MatDialog, public afAuth: AngularFireAuth, public router:Router) {}

  signIn(){
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
    this.afAuth.signInWithPopup(googleAuthProvider);
  }

  signOut(){
    this.afAuth.signOut();
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  ngOnInit(): void{}
  async openDialog(){
    const user=await this.afAuth.currentUser;
    const isAuthenitcated = user ? true : false;
    if(!isAuthenitcated){
      this.router.navigate(['signin']);
    }else{
      this.dialog.open(DialogComponent, {
        width:'100%'
      });
    }
  }
}
