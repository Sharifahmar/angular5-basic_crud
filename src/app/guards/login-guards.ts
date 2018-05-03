import { CanActivate ,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login-service';
@Injectable()
export class LoginGuard implements CanActivate  {

    constructor(private router: Router, private loginService: LoginService) {}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        console.log("AlwaysAuthGuard");
        if(!this.loginService.isLoggedIn){
            this.router.navigate(['/Login']);
            return false;
        }
        return true;
      }
}