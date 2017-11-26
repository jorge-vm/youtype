import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  
  ngOnInit(){
    this.redirectIfLoggedIn();
  }

  loginData = {}

  constructor(private authService: AuthService, private router: Router) { }

  post() {
    this.authService.loginUser(this.loginData);
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn(){
    if(this.authService.isAuthenticated){
      this.router.navigate(['/']);
    }
  }

}
