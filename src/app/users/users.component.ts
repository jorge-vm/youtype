import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {
  users: any;

  constructor( private apiService: ApiService) {}
  
    ngOnInit(){
      this.apiService.getUsers()
      .subscribe(
        users => {
          this.users = users;
        },
        (errorMsg: string) => {
          alert(errorMsg);
        }
      );
    }
}
