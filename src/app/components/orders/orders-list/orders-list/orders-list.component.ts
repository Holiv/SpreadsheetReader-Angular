import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders.service'

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})

export class OrdersListComponent {

  ordersChunck: [Order[]] = [[]];
  orders: Order[] = [];
  pages: number[] = [];
  totalOrderValue: number = 0;
  totalPedidos: number = 0

  constructor(private orderService: OrdersService){}

  ngOnInit(): void{

    this.orderService.getChunckOrders().subscribe({
      next: (chunckOrder) => {
        this.ordersChunck = chunckOrder;
        this.getOrdersCurrentList();
        this.getPages();
      },
      error: (response) => {
        console.log(response)
      }
    })
  }

  getSum(){
    this.totalOrderValue = 0;
    this.totalPedidos = 0;
    this.orders.forEach(order => {
      this.totalOrderValue += order.value;   
      this.totalPedidos += order.quantity; 
    });
  }

  getOrdersCurrentList(page = 1){
    let index = page - 1;
    this.orders = this.ordersChunck[index]
    this.getSum()
  }

  getPages(){
    for (let i = 1; i <= this.ordersChunck.length; i++) {
      this.pages.push(i)
    }
  }

}
