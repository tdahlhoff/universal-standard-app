import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuredRoutingModule } from './secured-routing.module';
import { SecuredComponent } from './secured.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';


@NgModule({
    declarations: [
        SecuredComponent,
        ProfileComponent
    ],
    imports: [
        CommonModule,
        SecuredRoutingModule,
        MaterialUiModule
    ]
})
export class SecuredModule {
}
