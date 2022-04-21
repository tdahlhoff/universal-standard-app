import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export abstract class BaseFormComponent {
    abstract form: FormGroup;
    valueMismatchMessage: string = $localize `Der eingegebene Wert stimmt nicht überein.`;

    getErrorMessage(controlName: string): string {
        const control = this.form.get(controlName);
        if (control) {
            if (control.hasError('required')) {
                return $localize `Dieses Feld ist ein Pflichtfeld.`;
            }
            if (control.hasError('value_mismatch')) {
                return this.valueMismatchMessage;
            }
            if (control.hasError('email')) {
                return $localize `Bitte überprüfen Sie die E-Mail Adresse.`;
            }
        }
        return $localize `Dieses Feld ist fehlerhaft.`;
    }

    static valuesMatchValidator(controlName1: string, controlName2: string): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const control1 = control.get(controlName1);
            const control2 = control.get(controlName2);
            if (control1 && control2) {
                if (control1.value !== control2.value) {
                    control2.setErrors({...control2.errors, 'value_mismatch': true});
                    return {invalid: true};
                } else if (control2.errors) {
                    delete control2.errors['value_mismatch'];
                    control2.updateValueAndValidity({onlySelf: true});
                }
            }
            return null;
        };
    }
}
