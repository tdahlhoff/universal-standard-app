import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function valuesMatchValidator(controlName1: string, controlName2: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const control1 = control.get(controlName1);
        const control2 = control.get(controlName2);
        if (control1 && control2) {
            if (control1.value !== control2.value) {
                control2.setErrors({ ...control2.errors, 'value_mismatch': true });
                return { invalid: true };
            } else if (control2.errors) {
                delete control2.errors['value_mismatch'];
                control2.updateValueAndValidity({ onlySelf: true });
            }
        }
        return null;
    };
}

export function passwordStrengthValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (!value) {
            return null;
        }
        const hasUpperCase = /[A-Z]+/.test(value);
        const hasLowerCase = /[a-z]+/.test(value);
        const hasNumeric = /\d+/.test(value);
        const passwordValid = hasUpperCase && hasLowerCase && hasNumeric;
        return !passwordValid ? { 'password_strength': true } : null;
    };
}
