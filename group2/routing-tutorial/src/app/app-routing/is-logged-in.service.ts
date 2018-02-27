import {CanActivate} from "@angular/router";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router/src/router_state";
import {Observable} from "rxjs/Observable";

// localStorage.get('token') === 'hello world'

export class IsLoggedIn {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return localStorage.getItem('token') === 'hello world';
  }
}
