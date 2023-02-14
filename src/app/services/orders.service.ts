import { HttpClient, HttpParams } from '@angular/common/http';
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

  getChunckOrders(): Observable<[Order[]]>{
    return this.http.get<[Order[]]>(this.ApiBaseUrl + "api/orders");
  }

  getByCode(codeValue: string): Observable<Order[]>{
    let param = new HttpParams().set('code', codeValue)
    return this.http.get<Order[]>(this.ApiBaseUrl + 'api/orders/code', {params: param})
  }

  getByCategory(codeValue: string): Observable<Order[]>{
    let param = new HttpParams().set('category', codeValue);
    return this.http.get<Order[]>(this.ApiBaseUrl + 'api/orders/category', {params: param})
  }
  
  getByMonth(codeValue: number): Observable<Order[]>{
    let param = new HttpParams().set('month', codeValue);
    return this.http.get<Order[]>(this.ApiBaseUrl + 'api/orders/month', {params: param})
  }

  getByTrimestre(codeValue: number): Observable<Order[]>{
    let param = new HttpParams().set('trimestre', codeValue);
    return this.http.get<Order[]>(this.ApiBaseUrl + 'api/orders/trimestre', {params: param});
  }

  getDistinctByCode(): Observable<number[]>{
    return this.http.get<number[]>(this.ApiBaseUrl + 'api/orders/dcode');
  }

  getDistinctByCategory(): Observable<string[]>{
    return this.http.get<string[]>(this.ApiBaseUrl + 'api/orders/dcategory');
  }

  getDistinctByMonth(): Observable<number[]>{
    return this.http.get<number[]>(this.ApiBaseUrl + 'api/orders/dmonth');
  }
}
