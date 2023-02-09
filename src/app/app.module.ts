import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersListComponent } from './components/orders/orders-list/orders-list/orders-list.component';
import { FileuploadComponent } from './components/fileupload/fileupload.component';
import { HttpClientModule } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeBr from '@angular/common/locales/br';
import { FilterComponent } from './components/filter/filter/filter.component'
registerLocaleData(localeBr, 'br')

@NgModule({
  declarations: [
    AppComponent,
    OrdersListComponent,
    FileuploadComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
