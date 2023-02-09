import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common'
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  route: any;
  href: string = "";
  allowList: boolean = false;

  orders: Order[] = [];
  ordersCode: number[] = [];
  ordersCategory: string[] = [];
  ordersMonth: number[] = [];
  selectedCode: any = "";
  totalOrderValue: number = 0;
  totalPedidos: number = 0

  constructor(location: Location, router: Router, private orderObject: OrdersService){
    this.route = router;
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.href = location.path();
        console.log(this.href)
      } else {
        this.href = 'Home'
      }
    });
  }

  ngOnInit(){
    this.orders = [];

    this.orderObject.getDistinctByCode().subscribe({
      next: (order) => {
        this.ordersCode = order;
      },
      error: (response) => {
        console.log(response);
      }
    });

    this.orderObject.getDistinctByCategory().subscribe({
      next: (category) => {
        this.ordersCategory = category;
      },
      error: (response) => {
        console.log(response);
      }
    });

    this.orderObject.getDistinctByMonth().subscribe({
      next: (month) => {
        this.ordersMonth = month;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  codeSelection(event: any){
      this.selectedCode = event.target.value;
      console.log(this.selectedCode);
  }

  loadSelectionByCode(){
    this.orderObject.getByCode(this.selectedCode).subscribe({
      next: (order) => {
        this.orders = order;
        this.getSum();
        console.log(this.orders)
      },
      error: (response) => {
        console.log(response);
      }
    })
    this.allowList = !this.allowList
    console.log(this.selectedCode);
    console.log(this.allowList)
    console.log(this.href)
  }

  loadSelectionByCategory(){
    this.orderObject.getByCategory(this.selectedCode).subscribe({
      next: (order) => {
        this.orders = order;
        this.getSum();
      },
      error: (response) => {
        console.log(response)
      } 
    })
  }

  loadSelectionByMonth(){
    this.orderObject.getByMonth(this.selectedCode).subscribe({
      next: (order) => {
        this.orders = order;
        this.getSum();
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  loadSelectionByTrimestre(){
    this.orderObject.getByTrimestre(this.selectedCode).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.getSum();
      },
      error: (response) => {
        console.log(response);
      }
    })
  }

  showList(){
    if (this.href == "/test"){
      return true;
    };
    return false;
    console.log(this.href)
  }

  getDescribedMonth(month: number){
    switch(month){
      case 1:
        return "Janeiro"
      case 2:
        return "Fevereiro"
      case 3:
        return "Março"
      case 4:
        return "Abril"
      case 5:
        return "Maio"
      case 6:
        return "Junho"
      case 7:
        return "Julho"
      case 8:
        return "Agosto"
      case 9:
        return "Setembro"
      case 10:
        return "Outurbo"
      case 11:
        return "Novembro"
      case 12:
        return "Dezembro"
      default:
        return "Mes inválido"
    }
  }
  
  getSum(){
    this.totalOrderValue = 0;
    this.totalPedidos = 0;
    this.orders.forEach(order => {
      this.totalPedidos += order.quantity;
      this.totalOrderValue += order.value;
    });
  }
}
