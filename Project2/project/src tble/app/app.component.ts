import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'Cetpa';
  courses=["Angular","Mean","Php","Java"];
  data=[
    {'name':'anuj','age':34,'city':'Noida'},
    {'name':'amit','age':44,'city':'Delhi'},
    {'name':'sunil','age':24,'city':'Noida'},
    {'name':'xyz','age':24,'city':'Noida'}
  ];
   abc()
   {
     alert("Hello")
   }
}
