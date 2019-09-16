import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SERVER, HTTP_STATUS } from '../enums';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private http: HttpClient, private cookieService: CookieService) { }

  async registerNewUser(userName, firstName, lastname, email, password) {
    const body = {
      ID: userName,
      Password: password,
      Name: firstName,
      Lastname: lastname,
      Email: email
    };
    await this.http.post(`${SERVER.URL}/register`, body, { observe: 'response' }).toPromise().then(response => {
      if (response.status === HTTP_STATUS.OK) {
        const cookie = this.cookieService.get('authToken');
        this.cookieService.set('authToken', cookie);
        return true;
      }
      console.log(response);
      return false;
    },
      error => {
        console.error(error);
        return false;
      });
  }

  async logIn(userId, password, rememberMe) {
    const body = {
      ID: userId,
      Password: password,
      rememberMe
    };
    await this.http.post(`${SERVER.URL}/login`, body, { observe: 'response', withCredentials: true }).toPromise().then(response => {
      console.log(response);
      if (response.status === HTTP_STATUS.OK) {
        window.localStorage.setItem('loggedIn', 'true');
        const cookie = this.cookieService.get('authToken');
        this.cookieService.set('authToken', cookie);
        if ((<any>response.body).isAdmin) {
          window.localStorage.setItem('admin', 'true');
        }
      }
    },
      error => {
        console.error(error);
      });
  }

  logOut() {
    this.router.navigate(['/login']);
    this.http.get(`${SERVER.URL}/logout`).subscribe();
    window.localStorage.setItem('loggedIn', 'false');
    window.localStorage.setItem('admin', 'false');
  }

  logInAsAdmin() {
    window.localStorage.setItem('admin', 'true');
    window.localStorage.setItem('loggedIn', 'true');
  }
}
