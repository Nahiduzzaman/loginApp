import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';
import { PostlistComponent } from './components/postlist/postlist.component';

const routes: Routes = [
    {
      path: '',
      component: HomeComponent,
      children : [
        {
          path: '',
          component: PostlistComponent
        },
        {
          path: ':id',
          component: DetailsComponent
        }
      ]
    }
    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppHomeRoutingModule { }
