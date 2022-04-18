import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthModule } from './auth/auth.module';
import { LayoutComponent } from './components/layout/layout.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => AuthModule
    },
    {
        path: '',
        component: LayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
            {path: '', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent}
        ]
    },
    {
        path: '**',
        component: PageNotFoundComponent
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
