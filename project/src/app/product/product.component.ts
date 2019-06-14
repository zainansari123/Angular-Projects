import { Component, OnInit, NgModuleFactory } from '@angular/core';
import { Product } from './mydefs';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  _totprd:any;
  _totqty:any;
  _totsales:any;
  constructor() { }
  ngOnInit() {
    for (let i = 0; i < Product.length; i++) {
       this._totprd = Product[i];
      // this._totprd=Product.length;  
    }
    
    // this._totqty=
    // this._totsales=
    
  }
  allProducts: Product[] = [
    { id: 'p104', brand: 'pepsi', price: 4, qty: 22, },
    { id: 'c104', brand: 'coke', price: 4, qty: 26, },
    { id: 'm104', brand: 'maggie', price: 6, qty: 10, },
    { id: 'd104', brand: 'cadbury', price: 10, qty: 15, },
    { id: 'ss18', brand: '5 star', price: 8, qty: 8, },
  ];
}
