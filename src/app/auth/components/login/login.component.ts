import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])
    });

    constructor(public authService: AuthService, private router: Router) {
    }

    ngOnInit(): void {
        this.authService.loginSuccessFull.pipe(
            untilDestroyed(this)
        ).subscribe({
            next: value => {
                if (value) {
                    this.redirect();
                }
            }
        });
    }

    signIn() {
        if (this.loginForm.valid) {
            this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password).subscribe({
                next: value => console.warn('next - ' + value),
                error: err => console.error('error - ' + err)
            });
        }
    }

    signInWithGoogle() {
        this.authService.signInWithGoogle().subscribe({
            next: value => console.warn('next - ' + value),
            error: err => console.error('error - ' + err)
        });
    }

    redirect() {
        if (this.authService.lastRoute) {
            return this.router.navigateByUrl(this.authService.lastRoute);
        }
        return this.router.navigateByUrl('');
    }
}
