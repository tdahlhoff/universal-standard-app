import { FormGroup } from '@angular/forms';

type MessageKeys =
    'required'
    | 'value_mismatch'
    | 'email'
    | 'minlength'
    | 'password_strength'
    | 'default';
export type BaseFormComponentMessageTypes = { [key in MessageKeys]?: string };

export abstract class BaseFormComponent {
    abstract form: FormGroup;
    private messages: BaseFormComponentMessageTypes = {
        required: $localize`Dieses Feld ist ein Pflichtfeld.`,
        value_mismatch: $localize`Der eingegebene Wert stimmt nicht überein.`,
        email: $localize`Die E-Mail Adresse scheint nicht korrekt zu sein.`,
        minlength: $localize`Du musst mindestens {{requiredLength}} Zeichen angeben.`,
        password_strength: $localize`Das Passwort ist nicht sicher genug.`,
        default: $localize`Dieses Feld ist fehlerhaft.`
    };

    overwriteMessages(messages: BaseFormComponentMessageTypes) {
        this.messages = { ...this.messages, ...messages };
    }

    getErrorMessage(controlName: string): string {

        const control = this.form.get(controlName);
        if (!control) {
            throw `No control found for controlName ${controlName}`;
        }

        if (!control.errors) {
            return 'Dieses Feld hat keinen Fehler.';
        }

        for (const [key, value] of Object.entries(this.messages)) {
            if (control.hasError(key)) {
                let message = value;
                const error: [string, string] = control.getError(key);
                Object.entries(error).forEach(([errorKey, errorValue]) => {
                    message = message.replace(`{{${errorKey}}}`, errorValue);
                });
                return message;
            }
        }
        return this.messages.default || '';
    }
}
