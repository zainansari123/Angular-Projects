import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private http:HttpClient) { }
  getNews()
  {
    const url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=32578531dba04580b24d506734b339ee";
    this.http.get(url)
    .subscribe(res=>
    {
      console.log(res)
    },err=>
   {
    console.log(err)
   })
  }
  ngOnInit() {
  }

}
