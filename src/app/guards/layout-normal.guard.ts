import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { LayoutService } from '../services/layout-service';

@Injectable({
    providedIn: 'root'
})
export class LayoutNormalGuard implements CanActivate {
    constructor(private layoutService: LayoutService) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean {
        this.layoutService.contentAlignment = 'normal';
        return true;
    }
}
