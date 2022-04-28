import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { take, tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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
        this.authService.user.pipe(untilDestroyed(this), take(1), tap(user => user?.sendEmailVerification()))
            .subscribe();
    }

    loginOtherAccount() {
        this.authService.signOut().subscribe({
            complete: () => this.router.navigate(['..', 'login'], { relativeTo: this.route })
        });
    }
}
