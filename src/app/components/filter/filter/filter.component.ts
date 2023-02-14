import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Order } from 'src/app/models/order.model';
import { OrdersService } from 'src/app/services/orders.service';
import { Chart, registerables } from 'node_modules/chart.js';
import 'chart.js/auto';
Chart.register(...registerables);

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  route: any;
  href: string = '';
  allowList: boolean = false;

  orders: Order[] = [];
  ordersCode: number[] = [];
  ordersCategory: string[] = [];
  ordersMonth: number[] = [];
  selectedCode: any = '';
  totalOrderValue: number = 0;
  totalPedidos: number = 0;
  chartIsActive: boolean = false;
  myChart: Chart;

  constructor(location: Location, router: Router, private orderObject: OrdersService) {
    this.route = router;
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.href = location.path();
      } else {
        this.href = 'Home';
      }
    });
  }

  ngOnInit() {
    this.orders = [];

    this.orderObject.getDistinctByCode().subscribe({
      next: (order) => {
        this.ordersCode = order;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.orderObject.getDistinctByCategory().subscribe({
      next: (category) => {
        this.ordersCategory = category;
      },
      error: (response) => {
        console.log(response);
      },
    });

    this.orderObject.getDistinctByMonth().subscribe({
      next: (month) => {
        this.ordersMonth = month;
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  codeSelection(event: any) {
    this.selectedCode = event.target.value;
  }

  loadSelectionByCode() {
    this.chartIsActive = false;
    this.orderObject.getByCode(this.selectedCode).subscribe({
      next: (order) => {
        this.orders = order;
        this.getSum();
      },
      error: (response) => {
        console.log(response);
      },
    });
    this.allowList = !this.allowList;
  }

  loadSelectionByCategory() {
    this.chartIsActive = false;
    this.orderObject.getByCategory(this.selectedCode).subscribe({
      next: (order) => {
        this.orders = order;
        this.getSum();
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  loadSelectionByMonth() {
    this.chartIsActive = false;
    this.orderObject.getByMonth(this.selectedCode).subscribe({
      next: (order) => {
        this.orders = order;
        this.getSum();
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  loadSelectionByTrimestre() {
    this.orders = [];
    this.chartIsActive = true;
    this.orderObject.getByTrimestre(this.selectedCode).subscribe({
      next: (orders) => {
        this.orders = orders;
        this.getSum();
        this.getTotalOrdersByCode(...this.ordersCode);
      },
      error: (response) => {
        console.log(response);
      },
    });
  }

  showList() {
    if (this.href == '/test') {
      return true;
    }
    return false;
  }

  getDescribedMonth(month: number) {
    switch (month) {
      case 1:
        return 'Janeiro';
      case 2:
        return 'Fevereiro';
      case 3:
        return 'Março';
      case 4:
        return 'Abril';
      case 5:
        return 'Maio';
      case 6:
        return 'Junho';
      case 7:
        return 'Julho';
      case 8:
        return 'Agosto';
      case 9:
        return 'Setembro';
      case 10:
        return 'Outurbo';
      case 11:
        return 'Novembro';
      case 12:
        return 'Dezembro';
      default:
        return 'Mes inválido';
    }
  }

  getSum() {
    this.totalOrderValue = 0;
    this.totalPedidos = 0;
    this.orders.forEach((order) => {
      this.totalPedidos += order.quantity;
      this.totalOrderValue += order.value;
    });
  }

  getTotalOrdersByCode(...clientCode:any){
    let totalPedidos: number = 0;
    let valorTotal: number = 0;
    let qtdPedidos = [];
    let valorPedidos = [];


    console.log(clientCode);
    
    for (let i = 0; i < clientCode.length; i++) {

      totalPedidos = 0;
      valorTotal = 0;

      this.orders.filter(order => order.code === clientCode[i]).forEach(order => {
        totalPedidos += order.quantity;
        valorTotal += order.value;
      })

      qtdPedidos.push(totalPedidos);
      valorPedidos.push(valorTotal);
    }
    this.renderChart(qtdPedidos, valorPedidos);
  }

  renderChart(qtdPedidos:any[], valorPedidos:any[]) {
    if(this.myChart) this.myChart.destroy();
    this.myChart = new Chart('t_chart', {
      type: 'bar',
      data: {
        labels: this.ordersCode,
        datasets: [
          {
            label: 'Pedidos',
            data: qtdPedidos,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
            borderWidth: 1,
          },
          {
            label: 'Valor Total',
            data: valorPedidos,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 205, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(201, 203, 207, 0.2)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 159, 64)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)',
              'rgb(54, 162, 235)',
              'rgb(153, 102, 255)',
              'rgb(201, 203, 207)',
            ],
            borderWidth: 1,
          }
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      },
    });
  }
}
