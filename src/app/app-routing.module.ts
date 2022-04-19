import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './app-shared/services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { 
        path: 'login', 
        loadChildren: () => import('./app-login/app-login.module').then(m => m.AppLoginModule)
    },
    {
        path: 'home',
        canActivate: [AuthGuard],
        data: {
            authFailRedirection: '/login'
        },
        loadChildren: () => import('./app-home/app-home.module').then(m => m.AppHomeModule)
    }/* ,
    {
        path: 'home/:id',
        canActivate: [AuthGuard],
        data: {
            authFailRedirection: '/login'
        },
        loadChildren: () => import('./app-home/app-home.module').then(m => m.AppHomeModule)
    } */
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
