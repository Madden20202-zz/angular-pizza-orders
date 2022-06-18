import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pizza-order',
  templateUrl: './pizza-order.component.html',
  styleUrls: ['./pizza-order.component.css']
})
export class PizzaOrderComponent implements OnInit {

  @Input() order: any

  constructor() { }

  ngOnInit(): void {
  }

}
