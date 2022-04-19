import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
      console.log('Data provide in currentRoute',route.data);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let isRouteAccessible = true;
          if(isRouteAccessible) {
            
            resolve(true);
          }
          else {
            this.router.navigate([route.data.authFailRedirection]);
            resolve(false);
          }
        }, 300);
      });
  }
}
