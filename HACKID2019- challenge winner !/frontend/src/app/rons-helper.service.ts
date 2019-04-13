import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RonsHelperService {
  helper = [];

  constructor() { 
  }

  setHelper(data){
    this.helper = data;
  }
  
  getHelper(){
    return this.helper;
  }
}
