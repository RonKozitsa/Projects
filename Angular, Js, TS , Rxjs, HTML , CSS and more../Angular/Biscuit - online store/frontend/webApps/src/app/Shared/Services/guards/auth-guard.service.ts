import { Injectable } from '@angular/core';
import { Router, CanLoad, UrlSegment, Route } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanLoad{

  constructor(private router: Router) { }

  canLoad(route: Route, state: UrlSegment[]): boolean {
    const isLoggenID = window.localStorage.getItem('loggedIn');
    if (isLoggenID === 'true'){
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }


}
