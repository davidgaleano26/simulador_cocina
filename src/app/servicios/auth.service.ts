import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import { auth } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth: AngularFireAuth,private google : GooglePlus) { 
  }
  loginWithGoogle(){
    this.AFauth
    return this.google.login({}).then(result=>{
      const user_data_google = result;
      return this.AFauth.signInWithCredential(auth.GoogleAuthProvider.credential(null,user_data_google.accesToken))
    })
  }
}
