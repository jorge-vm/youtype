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

  ngOnInit() {

  }

  loginData = {}

  constructor(private authService: AuthService, private router: Router) { }

  post() {
    this.authService.loginUser(this.loginData)
      .subscribe(x => {
        alert(`Welcome to YouType!`);
        this.router.navigate(['/']);
      }, (errorMsg: string) => {
        alert(errorMsg);
      });
  }
}
