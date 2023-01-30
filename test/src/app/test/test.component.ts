import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlsrvcService } from '../services/urlsrvc.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit{
  constructor(public urlsrv: UrlsrvcService){
    
  }

  async ngOnInit(){
    window.location = await this.urlsrv.decryptShortUrl(window.location.href) as any
    
  }
}
