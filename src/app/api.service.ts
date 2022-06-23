import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  }

  constructor(private http:HttpClient) { }

  getPizzaOrder() {

    //I made a mock server on postman, which hits the 
    // server but still shows nothing, going through 
    // postman tutorials to figure out how to configure it all
    return this.http.get('http://127.0.0.1:5000/orders')

    // this  still isn't being called
    // return this.http.get('https://f97e853d-a811-450e-b21e-857e14a2016d.mock.pstmn.io')
  }
}
