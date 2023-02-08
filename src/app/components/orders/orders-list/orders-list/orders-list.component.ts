import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})

export class OrdersListComponent {

  orders: Order[] = [];

  constructor(private orderService: OrdersService){}

  ngOnInit(): void{
    this.orderService.getAllOrders().subscribe({
      next: (order) => {
        this.orders = order;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
