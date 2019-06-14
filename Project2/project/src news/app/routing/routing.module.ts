import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { MainComponent } from '../main/main.component';
const route:Routes=[
  {path:'',component:MainComponent}
];
@NgModule({
  imports: [
    CommonModule,RouterModule.forRoot(route)
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
