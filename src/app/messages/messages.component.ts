import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MessagesComponent implements OnInit {

  constructor( private apiService: ApiService, private route: ActivatedRoute) {}
  
    ngOnInit(){
      var userId = this.route.snapshot.params.id;
      
      this.apiService.getMessages(userId);
    }

}
