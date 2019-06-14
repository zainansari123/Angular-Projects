import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-catpro',
  templateUrl: './catpro.component.html',
  styleUrls: ['./catpro.component.css']
})
export class CatproComponent implements OnInit {
  cname:any;
  constructor(private ar:ActivatedRoute) { }

  ngOnInit() 
  {
    this.ar.params.subscribe(par=>
      {
        this.cname=par['cat'];
      })
  }

}
