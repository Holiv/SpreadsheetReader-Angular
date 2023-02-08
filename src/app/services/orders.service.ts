import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  ApiBaseUrl: string = environment.ApiBaseUrl;

  constructor(private http: HttpClient) {}

  getAllOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(this.ApiBaseUrl + "api/orders")
  }
}
