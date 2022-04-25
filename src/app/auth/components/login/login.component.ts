import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BaseFormComponent } from '../../../shared/components/base-form-component/base-form-component';
import { MatSnackBar } from '@angular/material/snack-bar';
import firebase from 'firebase/compat';
import FirebaseError = firebase.FirebaseError;

@UntilDestroy()
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent extends BaseFormComponent implements OnInit {

    form = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

    constructor(public authService: AuthService, private router: Router, private snackBar: MatSnackBar) {
        super();
    }

    ngOnInit(): void {
    }

    signIn() {
        if (this.form.valid) {
            this.authService.signIn(this.form.value.email, this.form.value.password).subscribe({
                error: (error: FirebaseError) => {
                    let message;
                    if (error.code == 'auth/wrong-password') {
                        message = $localize`Das Passwort ist nicht korrekt!`;
                    } else if(error.code == 'auth/user-not-found') {
                        message = $localize`Ein Account mit dieser E-Mail Adresse ist uns nicht bekannt.`;
                    } else {
                        message = $localize`Beim Login ist ein Fehler aufgetreten!`;
                    }
                    this.snackBar.open(message);
                },
                complete: () => this.redirect()
            });
        }
    }

    signInWithGoogle() {
        this.authService.signInWithGoogle().subscribe({
            error: () => {
                let message = $localize`Beim Login ist ein Fehler aufgetreten!`;
                this.snackBar.open(message);
            },
            complete: () => this.redirect()
        });
    }

    redirect() {
        if (this.authService.lastRoute) {
            return this.router.navigateByUrl(this.authService.lastRoute);
        }
        return this.router.navigateByUrl('');
    }
}
