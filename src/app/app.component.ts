import { Component, OnInit } from '@angular/core';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, tap } from 'rxjs';

@UntilDestroy()
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    title = 'Universal-Standard-App';
    isMobile = false;

    constructor(public mediaObserver: MediaObserver) {
    }

    ngOnInit() {
        this.mediaObserver.asObservable().pipe(
            untilDestroyed(this),
            tap((change: MediaChange[]) => this.isMobile = change[0].mqAlias == 'xs')
        ).subscribe();
    }
}
