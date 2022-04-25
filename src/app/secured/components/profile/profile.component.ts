import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, from, switchMap, take } from 'rxjs';
import { isNonNull } from '../../../shared/rxjs-additions';

@UntilDestroy()
@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

    constructor(public authService: AuthService) {
    }

    ngOnInit(): void {
    }

    setDisplayName() {
        this.authService.user.pipe(
            untilDestroyed(this),
            filter(isNonNull),
            take(1),
            switchMap(user => {
                return from(user.updateProfile({ displayName: 'Timo SiSa Syco' }));
            })
        ).subscribe();
    }
}
