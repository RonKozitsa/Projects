import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  logOut(){
    this.authService.logOut();
  }

  get isLoggedIn() {
    return window.localStorage.getItem('loggedIn') === 'true';
  }

  get isAdmin() {
    return window.localStorage.getItem('admin') === 'true';
  }

}
