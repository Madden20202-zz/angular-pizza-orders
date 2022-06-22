import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  orderData: any

  constructor(private api:ApiService) { }

  ngOninit(): void {
    this.findOrderData();
  }

  findOrderData(): any {
    this.api.getPizzaOrder().subscribe((data)=> {
      this.orderData = data
    })
  }
}
