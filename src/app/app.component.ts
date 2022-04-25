import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { tap } from 'rxjs';
import { AuthService } from './auth/auth.service';

@UntilDestroy()
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Universal-Standard-App';
    isMobile = false;
    isAuthenticated = false;

    constructor(public mediaObserver: MediaObserver, private authService: AuthService) {
    }

    ngOnInit() {
        this.mediaObserver.asObservable().pipe(
            untilDestroyed(this),
            tap((change: MediaChange[]) => this.isMobile = change[0].mqAlias == 'xs')
        ).subscribe();

        this.authService.user.pipe(
            untilDestroyed(this),
            tap(user => this.isAuthenticated = !!(user && user.emailVerified))
        ).subscribe();
    }
}
