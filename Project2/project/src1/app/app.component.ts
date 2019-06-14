import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent
 {
   data:any;
  name = 'Sumit Joshi';
  courses=["Php","Java","CCNA","Linux"];
  
  abc()
  {
    this.data=[
      {name:'anuj',age:45,city:'Noida'},
      {name:'amit',age:35,city:'Jaipur'},
      {name:'sunil',age:55,city:'Delhi'},
      {name:'swati',age:55,city:'Delhi'}
    ];
  }
}
