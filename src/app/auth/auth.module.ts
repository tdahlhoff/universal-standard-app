import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './components/register/register.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MaterialUiModule } from '../material-ui/material-ui.module';


@NgModule({
    declarations: [
        AuthComponent,
        LoginComponent,
        RegisterComponent,
        ForgotPasswordComponent
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
