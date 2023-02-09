import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './components/orders/orders-list/orders-list/orders-list.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { FilterComponent } from './components/filter/filter/filter.component';

const routes: Routes = [
  {
    path: 'orderList',
    component: OrdersListComponent,
  },
  {
    path: 'filter',
    component: FilterComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
