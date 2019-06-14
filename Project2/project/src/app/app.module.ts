import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NoidaComponent } from './contact/noida/noida.component';
import { LucknowComponent } from './contact/lucknow/lucknow.component';
import { DehradunComponent } from './contact/dehradun/dehradun.component';
const route:Routes=[
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent,
children:[
  {path:'',component:NoidaComponent},
  {path:'noida',component:NoidaComponent},
  {path:'lucknow',component:LucknowComponent},
  {path:'dehradun',component:DehradunComponent}
]}
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NoidaComponent,
    LucknowComponent,
    DehradunComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
