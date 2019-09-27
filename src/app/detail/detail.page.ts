import { Component, OnInit } from '@angular/core';
import { RoutingParamService } from '../routing-param.service';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  car:any;
  constructor(public param: RoutingParamService, private contentful : ContentfulService) {
  this.car =  this.param.getParam();
  }
  ngOnInit() {
   console.log(this.car);
  }
  gettype(type){
    console.log(type);
    this.contentful.getCarByType(type).then((data)=>{
      console.log(data);
    });
  }

}
