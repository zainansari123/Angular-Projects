import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
  nData;
  newsdata;
  ngOnInit() {
    const url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=32578531dba04580b24d506734b339ee";
     this.http.get(url)
     .subscribe(res=>
      {
        this.nData=res;
        this.newsdata=this.nData.articles;
         console.log(res)
      },err=>
      {
        console.log(err)
      })
  }

}
