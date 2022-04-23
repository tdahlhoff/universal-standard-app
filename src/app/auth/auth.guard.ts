import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.authService.angularFireAuth.user.pipe(
            map(user => {
                if (user) {
                    if (!user.emailVerified) {
                        this.router.navigate(['/auth/awaiting-email-confirmation']);
                        return false;
                    }
                    return true;
                }
                if (state.url && !state.url.includes('auth')) {
                    console.warn(state.url);
                    this.authService.setLastRoute(state.url);
                }
                // todo: hier ist die route fest hinterlegt obwohl das "auth" eigentlich aus der App selber kommt und
                //  dem AuthModule nicht bekannt ist, dass es als prefix das auth vor den routen hat
                this.router.navigate(['/auth/login']);
                return false;
            })
        );
        /*
        if (location.pathname && !location.pathname.includes('auth')) {
            console.warn(state.url);
            this.authService.setLastRoute(state.url);
        }
        this.router.navigate(['/auth/login']);
        return false;*/
    }

}
