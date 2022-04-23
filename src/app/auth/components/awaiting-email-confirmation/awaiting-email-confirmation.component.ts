import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-awaiting-email-confirmation',
    templateUrl: './awaiting-email-confirmation.component.html',
    styleUrls: ['./awaiting-email-confirmation.component.scss']
})
export class AwaitingEmailConfirmationComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    resendVerificationEmail() {
        this.authService.user?.sendEmailVerification();
    }
}
