import { Injectable } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { ToastrService } from 'ngx-toastr'; 

import Localbase from 'localbase'
import uniqid from 'uniqid';
@Injectable({
  providedIn: 'root'
})
export class UrlsrvcService {
  short: string = ''
  original: string = '' 
  db: any 
  constructor(private clipboardService: ClipboardService,private toastr: ToastrService) 
  
  {this.db = new Localbase('db')   
}

  generateShortUrl(text: string){
  
  
    this.short =`${window.location.href}test/${uniqid()}`

    this.db.collection('urls').add({
      short:  this.short,
      original: text
    })
  }

  decryptShortUrl(text: string): Promise<string>{
  
 
    return new Promise(resolve =>{
      this.db.collection('urls').get().then(urls => {
        for (let index = 0; index < urls.length; index++) {
          if(text === urls[index].short){
            this.original = urls[index].original
          
            
          }
          
        }

        resolve(this.original )
        
      })
    })
    
  }
  copyUrl(text: string){
    
     this.toastr.success('Copied', 'URL Copied');
   this.clipboardService.copy(text)
   

  }

  copyOriginalUrl(decrypt: string){
    
    this.toastr.success('Hello world!', 'Original URL Copied');
    this.clipboardService.copy(decrypt)
  }
}
