import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http:HttpClient) { }

  getPizzaOrder() {
    return this.http.get('http://127.0.0.1:5000/orders')
  }
}
