import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DeleteOrdersServiceService {

  ApiBaseUrl: string = environment.ApiBaseUrl;

  constructor(private http: HttpClient) { }

  deleteAllOrders(){
    return this.http.delete(this.ApiBaseUrl + "api/orders")
    .subscribe({
      next: (event) => {
        console.log(event)
      },
      error: (response) => {
        console.log(response)
      }
    })
  }
}
