import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
// import { EvenOddComponent } from './even-odd/even-odd.component';
import { ProductComponent } from './product/product.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
// import { Product} from './product/mydefs';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    ProductComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
