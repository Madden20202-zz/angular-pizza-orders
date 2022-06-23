import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getPizzaOrder() {
    // For whater reason the data is not coming 
    // from the api to here

    //I made a mock server on postman, which hits the 
    // server but still shows nothing, going through 
    // postman tutorials to figure out how to configure it all
    // return this.http.get('http://127.0.0.1:5000/orders')

    return this.http.get('https://f97e853d-a811-450e-b21e-857e14a2016d.mock.pstmn.io')
  }
}
