import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import {
    AwaitingEmailConfirmationComponent
} from './components/awaiting-email-confirmation/awaiting-email-confirmation.component';
import {
    ResetPasswordEmailSentComponent
} from './components/reset-password-email-sent/reset-password-email-sent.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
    {
        path: '',
        component: AuthComponent,
        children: [
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'register',
                component: RegisterComponent
            },
            {
                path: 'reset-password',
                component: ResetPasswordComponent
            },
            {
                path: 'reset-password-email-sent',
                component: ResetPasswordEmailSentComponent
            },
            {
                path: 'awaiting-email-confirmation',
                component: AwaitingEmailConfirmationComponent
            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
