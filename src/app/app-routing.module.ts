import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersListComponent } from './components/orders/orders-list/orders-list/orders-list.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: OrdersListComponent
  // },
  // {
  //   path: '',
  //   component: FileuploadComponent
  // },
  {
    path: 'orderList',
    component: OrdersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
