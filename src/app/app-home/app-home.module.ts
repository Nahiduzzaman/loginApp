import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppHomeRoutingModule } from './app-home-routing.module';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';


@NgModule({
  declarations: [
    DetailsComponent,
    HomeComponent,
    PostlistComponent,
    PostDetailComponent
  ],
  imports: [
    CommonModule,
    AppHomeRoutingModule
  ]
})
export class AppHomeModule { }
