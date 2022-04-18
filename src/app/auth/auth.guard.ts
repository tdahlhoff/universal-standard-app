import { Injectable } from '@angular/core';
import {
    ActivatedRoute,
    ActivatedRouteSnapshot,
    CanActivate, CanActivateChild,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivateChild {
    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    }

    canActivateChild(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        if (location.pathname && !location.pathname.includes('auth')) {
            console.warn(location.pathname);
            this.authService.setLastRoute(location.pathname);
        }
        this.router.navigate(['/auth/login']);
        return false;
    }

}
