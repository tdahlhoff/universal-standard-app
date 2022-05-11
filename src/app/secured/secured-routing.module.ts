import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SecuredComponent } from './secured.component';
import { ProfileComponent } from './components/profile/profile.component';
import { UniversalListComponent } from './components/universal-list/universal-list.component';

const routes: Routes = [
    {
        path: '',
        component: SecuredComponent,
        children: [
            { path: 'profile', component: ProfileComponent },
            { path: 'universal-list', component: UniversalListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecuredRoutingModule {
}
