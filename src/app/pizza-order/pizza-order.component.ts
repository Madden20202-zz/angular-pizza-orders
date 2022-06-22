import { Component, Input, OnInit } from '@angular/core';
import { Pizza } from './pizza.model';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.css']
})
export class PizzaOrderComponent implements OnInit {

  @Input() order!: Pizza

  constructor() { 
  }

  ngOnInit(): void {
  }
}
