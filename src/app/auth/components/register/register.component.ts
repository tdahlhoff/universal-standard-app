import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { BaseFormComponent } from '../../../components/base-form/base-form.component';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends BaseFormComponent implements OnInit {

    form = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormGroup({
            password1: new FormControl('', [Validators.required]),
            password2: new FormControl('', [Validators.required])
        }, [BaseFormComponent.valuesMatchValidator('password1', 'password2')])
    });

    override valueMismatchMessage = $localize `Das eingegebene Passwort stimmt nicht überein.`;

    constructor(private authService: AuthService) {
        super();
    }

    ngOnInit(): void {
    }

    register() {
        if (this.form.valid) {
            this.authService.register(
                this.form.value.email, this.form.get(['password', 'password1'])?.value
            ).subscribe({
                next: value => alert('next - ' + value),
                error: err => alert('error - ' + err),
                complete: () => alert('Heureka!')
            });
        }
    }
}
