import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnipperService {

  showsnipper = false;
  message = 'loading....';
  constructor() { }

  show(message = 'loading...'){
    this.showsnipper = true;
    this.message = message;
  }

  hide(){
    this.showsnipper = false;
  }
}
