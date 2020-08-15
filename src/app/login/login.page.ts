import { Component, OnInit } from '@angular/core';
import { AuthService} from '../servicios/auth.service'
import { Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService : AuthService, public router: Router) { }

  ngOnInit() {
  }
  loginGoogle(){
    this.authService.loginWithGoogle().then(() =>{
      this.router.navigate(['/inicio']);
    }).catch(err =>{
      alert ('Algo salió mal contacte con el administrador' + JSON.stringify(err));
    })
  }
}
