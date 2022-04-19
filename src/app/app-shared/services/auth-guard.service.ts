import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> | boolean {
      console.log('Data provide in currentRoute',route);
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let isRouteAccessible = false;
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
