import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { BaseFormComponent } from '../../../shared/components/base-form-component/base-form-component';

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

    constructor(public authService: AuthService, private router: Router) {
        super();
    }

    ngOnInit(): void {
    }

    signIn() {
        if (this.form.valid) {
            this.authService.signIn(this.form.value.email, this.form.value.password).subscribe({
                next: value => console.warn('next', value),
                error: err => console.error('error', err),
                complete: () => this.redirect()
            });
        }
    }

    signInWithGoogle() {
        this.authService.signInWithGoogle().subscribe({
            next: value => console.warn('next', value),
            error: err => console.error('error', err),
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
