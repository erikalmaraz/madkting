import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  isInDetail: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    const _ = this;
    if(_.router.url.includes('products')){
      _.isInDetail = true;
      console.log(_.isInDetail);
    }
  }
}
