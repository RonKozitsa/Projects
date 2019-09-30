import { Injectable } from '@angular/core';
import { Router, CanLoad, UrlSegment, Route } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanLoad {

  constructor(private authService: AuthService, private router: Router) { }

  canLoad(route: Route, state: UrlSegment[]): boolean {
    const isAdmin = window.localStorage.getItem('admin') === 'true';
    if (isAdmin){
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }
}
