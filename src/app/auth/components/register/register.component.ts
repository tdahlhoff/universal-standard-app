import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { BaseFormComponent } from '../../../shared/components/base-form-component/base-form-component';
import { passwordStrengthValidator, valuesMatchValidator } from '../../../shared/validators/validators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { UserCredential } from '@angular/fire/auth';
import { FirebaseError } from '@firebase/util';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseFormComponent implements OnInit {

    form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormGroup({
            password1: new FormControl('', [Validators.required, Validators.minLength(8), passwordStrengthValidator()]),
            password2: new FormControl('', [Validators.required])
        }, [valuesMatchValidator('password1', 'password2')])
    });

    constructor(private authService: AuthService, private snackBar: MatSnackBar, private router: Router,
        private route: ActivatedRoute) {
        super();
    }

    ngOnInit(): void {
        this.overwriteMessages({ value_mismatch: $localize`Das eingegebene Passwort stimmt nicht überein.` });
    }

    register() {
        if (this.form.valid) {
            this.authService.register(
                this.form.value.email, this.form.get(['password', 'password1'])?.value
            ).subscribe({
                next: (userCredential: UserCredential) => {
                    if (userCredential.user) {
                        this.authService.sendEmailVerification(userCredential.user).subscribe({
                            complete: () => this.router.navigate(['..', 'awaiting-email-confirmation'],
                                { relativeTo: this.route })
                        });
                    }
                },
                error: (error: FirebaseError) => {
                    let message;
                    if (error.code === 'auth/email-already-in-use') {
                        message = $localize`Die E-Mail Adresse wird bereits verwendet.`;
                    } else {
                        message = $localize`Bei der Registrierung ist ein Fehler aufgetreten.`;
                    }
                    this.snackBar.open(message);
                }
            });
        }
    }
}
