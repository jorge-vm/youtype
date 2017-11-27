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
  btnText: string;
  profileId: any;
  profile: any;
  

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.profileId = this.route.snapshot.params.id
     this.btnText = 'Follow'

    this.apiService.getProfile(this.profileId)
      .subscribe(d => this.profile = d,
      (errorMsg: string) => {
        alert(errorMsg);
      })
  }

  follow(){
    this.apiService.follow(this.profileId)
    .subscribe(
      ()=>{ this.btnText = 'Following'},
      () => {
        alert('Follow failed; please check the console');
      }
    );
  }

}
