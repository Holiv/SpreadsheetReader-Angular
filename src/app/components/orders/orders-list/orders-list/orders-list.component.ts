import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders.service'
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})

export class OrdersListComponent {

  orders: Order[] = [];
  totalOrderValue: number = 0;
  totalPedidos: number = 0

  constructor(private orderService: OrdersService){}

  ngOnInit(): void{
    this.orderService.getAllOrders().subscribe({
      next: (order) => {
        this.orders = order;
        this.getSum();
      },
      error: (response) => {
        console.log(response);
      }
    });
  }

  getSum(){
    this.orders.forEach(order => {
      this.totalOrderValue += order.value;   
      this.totalPedidos += order.quantity; 
    });
  }
}
