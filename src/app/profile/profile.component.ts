import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProfileComponent implements OnInit {

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  profile

  ngOnInit() {
    var id = this.route.snapshot.params.id
    var profile = this.apiService.getProfile(id)
      .subscribe(d => this.profile = d,
      (errorMsg: string) => {
        alert(errorMsg);
      })
  }

}
