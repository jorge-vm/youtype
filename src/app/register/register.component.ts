import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent {
  registerData = {}

  constructor(private authService: AuthService, private router: Router) { }

  post() {
    this.authService.registerUser(this.registerData)
      .subscribe(x => {
        alert(`User successfully created.`);
        this.router.navigate(['/']);
      }, (errorMsg: string) => {
        alert(errorMsg);
      })
  }
}
