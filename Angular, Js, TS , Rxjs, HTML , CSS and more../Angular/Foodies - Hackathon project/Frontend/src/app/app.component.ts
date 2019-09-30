import { Component, OnInit } from '@angular/core';

import { DataServiceService } from './services/data-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{
  text = 'Foodiesndljgnfljgndlgldsjnglnfdlgnlfdnglnfdlnglfnlgnfdlgnldnngljfdgnlfdngljfdnlgnldfsngdf';
  images = ['hamburger'];

  users :any = [];
  categories = [];

  constructor(private DataServiceService: DataServiceService){

  }

  ngOnInit() {    
    //this.initUsers();
    //this.initCategories(); 
  }

  async initUsers(){
    this.users = await this.DataServiceService.getUsers();
  }

  initCategories(){
    // this.categories = this.DataServiceService.getCategories();
  }

}
