import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    registerForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormGroup({
            password1: new FormControl('', [Validators.required]),
            password2: new FormControl('', [Validators.required])
        }, [RegisterComponent.passwordsMatchValidator])
    });

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    static passwordsMatchValidator(control: AbstractControl) {
        if (control.get('password1')?.value !== control.get('password2')?.value) {
            return {invalid: true};
        }
        return null;
    }

    register() {
        if (this.registerForm.valid) {
            this.authService.register(
                this.registerForm.value.email, this.registerForm.get(['password', 'password1'])?.value
            ).subscribe({
                next: value => alert('next - ' + value),
                error: err => alert('error - ' + err),
                complete: () => alert('Heureka!')
            });
        }
    }
}
