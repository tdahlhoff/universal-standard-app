import { Component, OnInit } from '@angular/core';
import { BaseFormComponent } from '../../../shared/components/base-form-component/base-form-component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import firebase from 'firebase/compat';
import FirebaseError = firebase.FirebaseError;
import { ActivatedRoute, Router } from '@angular/router';

export type ViewElement = 'form' | 'summary';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent extends BaseFormComponent {

    form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email])
    });
    show: ViewElement = 'form';

    constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router,
        private route: ActivatedRoute) {
        super();
    }

    resetPassword() {
        if (this.form.valid) {
            this.authService.sendPasswordResetEmail(this.form.value.email).subscribe({
                error: (error: FirebaseError) => {
                    let message;
                    if (error.code == 'auth/user-not-found') {
                        message = $localize`Ein Account mit dieser E-Mail Adresse ist uns nicht bekannt.`
                    } else {
                        message = $localize`Die E-Mail zum zurücksetzen des Passwortes konnte nicht versendet werden.` +
                            ` Bitte versuche es später noch einmal.`;
                    }
                    this.snackBar.open(message);
                },
                complete: () => {
                    this.router.navigate(['..', 'reset-password-email-sent'], {relativeTo: this.route});
                }
            })
        }
    }
}
