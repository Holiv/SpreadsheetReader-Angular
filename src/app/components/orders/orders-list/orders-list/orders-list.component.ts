import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})

export class OrdersListComponent {

  orders: Order[] = [
    {
      id: "4384bf10-746c-4d09-fccf-08db098fe75c",
      code: 906520,
      category: "ASDPSOLT",
      date: new Date("2022-03-12"),
      quantity: 1,
      value: 402.07
    },
    {
      id: "4384bf10-746c-4d09-fccf-08db098fe75c",
      code: 906551,
      category: "ASHDCLDT",
      date: new Date("2022-01-10"),
      quantity: 10,
      value: 111.81
    }
  ];

  orders_test: Order[] = [];

  // constructor(){}

  constructor(private orderService: OrdersService){}

  ngOnInit(): void{
    this.orderService.getAllOrders().subscribe({
      next: (order) => {
        this.orders_test = order;
      },
      error: (response) => {
        console.log(response);
      }
    });
  }
}
