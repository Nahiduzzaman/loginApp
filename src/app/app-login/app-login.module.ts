import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoginRoutingModule } from './app-login-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { AppSharedModule } from '../app-shared/app-shared.module';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppLoginRoutingModule,
    AppSharedModule
  ]
})
export class AppLoginModule { }
