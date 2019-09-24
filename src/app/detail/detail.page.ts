import { Component, OnInit } from '@angular/core';
import { RoutingParamService } from '../routing-param.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  car:any;
  constructor(public param: RoutingParamService) {
  this.car =  this.param.getParam();
  }
  ngOnInit() {
   console.log(this.car);
  }

}
