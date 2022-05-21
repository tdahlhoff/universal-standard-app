import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, from, switchMap, take } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { sendEmailVerification, User } from '@angular/fire/auth';
import { isNonNull } from '../../../shared/rxjs-additions';

@UntilDestroy()
@Component({
    selector: 'app-awaiting-email-confirmation',
    templateUrl: './awaiting-email-confirmation.component.html',
    styleUrls: ['./awaiting-email-confirmation.component.scss']
})
export class AwaitingEmailConfirmationComponent {

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    }

    resendVerificationEmail() {
        this.authService.user.pipe(
            untilDestroyed(this),
            filter(isNonNull),
            take(1),
            switchMap((user: User) => from(sendEmailVerification(user)))
        ).subscribe();
    }

    loginOtherAccount() {
        this.authService.signOut().subscribe({
            complete: () => this.router.navigate(['..', 'login'], { relativeTo: this.route })
        });
    }
}
