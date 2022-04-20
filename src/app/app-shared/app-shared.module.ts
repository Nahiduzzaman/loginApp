import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayProjectNameComponent } from './component/display-project-name/display-project-name.component';



@NgModule({
  declarations: [
    DisplayProjectNameComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DisplayProjectNameComponent
  ]
})
export class AppSharedModule { }
