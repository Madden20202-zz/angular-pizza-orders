import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PizzaOrderComponent } from './pizza-order/pizza-order.component';
import { ApiService } from './api.service';

@NgModule({
  declarations: [
    AppComponent,
    PizzaOrderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
