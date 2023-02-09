import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'SpreadsheetReader';
  href: string = "";
  route: any;

  constructor(location: Location, router: Router){
    this.route = router;
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.href = location.path();
      } else {
        this.href = 'Home'
      }
    });
  }

  ngOnInit(){
  }
  getHref(){
    return this.href === '/orderList' || false
  }
}
