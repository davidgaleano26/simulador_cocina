import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import { auth } from 'firebase';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth, private google: GooglePlus) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) =>{

      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        resolve(user);
      }).catch(err => rejected(err));
    });
    
  }



  loginWithGoogle(){
    // tslint:disable-next-line: no-unused-expression
    return this.google.login({}).then(result => {
      // tslint:disable-next-line: variable-name
      const user_data_google = result;
      return this.AFauth.signInWithCredential(auth.GoogleAuthProvider.credential(null, user_data_google.accesToken));
    });
  }
}
