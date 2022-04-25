import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { AwaitingEmailConfirmationComponent } from './components/awaiting-email-confirmation/awaiting-email-confirmation.component';
import { ResetPasswordEmailSentComponent } from './components/reset-password-email-sent/reset-password-email-sent.component';


@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent,
        ResetPasswordComponent,
        AwaitingEmailConfirmationComponent,
        ResetPasswordEmailSentComponent
    ],
    imports: [
        CommonModule,
        AngularFireAuthModule,
        AuthRoutingModule,
        FlexLayoutModule,
        ReactiveFormsModule,
        MaterialUiModule
    ],
    providers: [
        AuthService
    ]
})
export class AuthModule {
}
