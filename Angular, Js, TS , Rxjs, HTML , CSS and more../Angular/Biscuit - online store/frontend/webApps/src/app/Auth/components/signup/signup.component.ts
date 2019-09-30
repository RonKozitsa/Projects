import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import { AuthService } from '../../../Shared/Services/auth.service';
import { SERVER } from 'src/app/Shared/enums';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  username = '';
  firstName = '';
  lastName = '';
  password = '';
  passwordConfirm = '';
  email = '';
  displayLodaer = false;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.http.post(`${SERVER.URL}/setstatusbyid/signUp`, {}).subscribe();
  }

  async onSignUp() {
    this.displayLodaer = true;
    await this.authService.registerNewUser(this.username, this.firstName, this.lastName, this.email,  this.password);
    await this.authService.logIn(this.username, this.password, false);
    this.router.navigate(['/home']);

  }

}
