import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RonsHelperService {

  constructor() { 
  }

  set data(data){
    if (!data){
      this.data = [];
    }
    this.data = data;
  }
  
  get data(){
    return this.data;
  }
}
