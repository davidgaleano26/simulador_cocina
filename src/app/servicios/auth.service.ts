import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {GooglePlus} from '@ionic-native/google-plus/ngx';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { auth } from 'firebase';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';
import { Router } from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userRef: AngularFireObject<any>;
  userList: AngularFireList<any>;
  constructor(private AFauth: AngularFireAuth, private google: GooglePlus, private router: Router, private db: AngularFirestore,private bd: AngularFireDatabase) { }

  login(email:string, password:string){

    return new Promise((resolve, rejected) =>{

      this.AFauth.signInWithEmailAndPassword(email, password).then(user => {
        console.log(user);
        resolve(user);
      }).catch(err => rejected(err));
    });
    
  }
  getUser(id: string) {
    this.userRef = this.bd.object('/user/' + id);
    return this.userRef;
  }

  // Get List
  getUserList() {
    this.userList = this.bd.list('/user');
    return this.userList;
  }

  logout(){
    this.AFauth.signOut().then(() => {
      this.router.navigate(['/login']);
    })
  }

  register(email: string, password: string, nombres: string, apellidos: string, direccion: string, telefono: string){
    return new Promise ((resolve, reject) => {
      this.AFauth.createUserWithEmailAndPassword(email, password).then(
        res => {
          const uid = res.user.uid;
          //console.log(res.user.uid);
          this.db.collection('/Usuarios').doc(uid).set({

            nombres : nombres,
            apellidos : apellidos,
            direccion : direccion,
            telefono : telefono,
            uid : uid

          });
          resolve(res)}
      ).catch(err => reject(err));
    })
    
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
