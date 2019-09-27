import { Component, OnInit, ɵConsole } from '@angular/core';
import { car } from '../../models/cars';
import { Router } from '@angular/router';
import { RoutingParamService } from '../routing-param.service';
import { ContentfulService } from '../contentful.service';
import { Entry } from 'contentful';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

   cars:any[]=[];
  constructor(private router: Router, public param: RoutingParamService, private contentful:ContentfulService) {
  
  }
  ngOnInit(): void {
     this.contentful.getCars().then((cars:any) =>{
       console.log(cars);
       this.cars = cars;
    });
    
  }


  goToDetail(item){
    console.log(item);
    this.param.setItem(item);
    this.router.navigate(['/detail']);
  }

}
