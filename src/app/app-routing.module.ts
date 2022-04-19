import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    { 
        path: 'login', 
        component: LoginComponent 
    },
    {
        path: 'home',
        canActivate: [AuthGuard],
        data: {
            authFailRedirection: '/login'
        },
        component: HomeComponent
    },
    {
        path: 'home/:id',
        canActivate: [AuthGuard],
        data: {
            authFailRedirection: '/login'
        },
        component: DetailsComponent
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
