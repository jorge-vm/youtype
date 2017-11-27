import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PostComponent {
  
  constructor(private apiService: ApiService) { }
  postMsg = ''

  post() {
      this.apiService.postMessage({msg: this.postMsg})
      .subscribe(
        () =>{ 
          alert('Successfully posted! Go to your profile to see your posts.'); 
          this.postMsg = ''
        },
        () => {
          alert('Post message failed; please check the console');
        }
      );
  }

}
