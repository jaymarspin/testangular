import { Component } from '@angular/core';
import { UrlsrvcService } from '../services/urlsrvc.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(public urlsrv: UrlsrvcService){
    
  }
}
