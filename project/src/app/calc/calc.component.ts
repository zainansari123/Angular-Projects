import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  exp:string='0';
  val:number=0;
  arr=['1','2','3','4'];
  cname=this.arr[0];
  addA():void{
    this.arr.push(this.cname);
    this.cname="";
  }
  remove(i:number){
    var n1:string[];
    console.log('i='+i);
    n1=this.arr.splice(i,1);
    this.cname=n1[0];
  }
  add1(s1:string,a1:number) {
    this.exp=this.exp+'+'+s1;
    this.val=this.val+a1;
  }
  add2(s2:string,a2:number) {
    this.exp=this.exp+'+'+s2;
    this.val=this.val+a2;
  }
  reset(){
    this.exp='0';
    this.val=0;
  }

}
