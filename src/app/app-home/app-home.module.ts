import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHomeRoutingModule } from './app-home-routing.module';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { PostlistComponent } from './components/postlist/postlist.component';


@NgModule({
  declarations: [
    DetailsComponent,
    HomeComponent,
    PostlistComponent
  ],
  imports: [
    CommonModule,
    AppHomeRoutingModule
  ]
})
export class AppHomeModule { }
