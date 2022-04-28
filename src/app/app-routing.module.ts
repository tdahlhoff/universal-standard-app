import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { LayoutCenteredGuard } from './guards/layout-centered.guard';
import { LayoutNormalGuard } from './guards/layout-normal.guard';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        canActivate: [LayoutNormalGuard]
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
        canActivate: [LayoutCenteredGuard]
    },
    {
        path: '',
        canActivate: [AuthGuard, LayoutNormalGuard],
        loadChildren: () => import('./secured/secured.module').then(m => m.SecuredModule)
    },
    {
        path: '**',
        component: PageNotFoundComponent,
        canActivate: [LayoutNormalGuard]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {
}
