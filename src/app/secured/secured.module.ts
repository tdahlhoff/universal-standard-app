import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecuredRoutingModule } from './secured-routing.module';
import { SecuredComponent } from './secured.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { NgxsModule } from '@ngxs/store';
import { UniversalListState } from './store/universal-list/universal-list.state';
import { UniversalListComponent } from './components/universal-list/universal-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
    declarations: [
        SecuredComponent,
        ProfileComponent,
        UniversalListComponent
    ],
    imports: [
        CommonModule,
        SecuredRoutingModule,
        NgxsModule.forFeature([UniversalListState]),
        MaterialUiModule,
        FlexLayoutModule
    ]
})
export class SecuredModule {
}
