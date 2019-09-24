import { Component } from '@angular/core';
import { car } from '../../models/cars';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cars:car[] = [
    {
      name:'honda',
      color:'red',
      model:2010,
      price: 2000,
      type:'excent',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsC_JeHv46FEW1c-VJ3pLHVK_dzOtCLthsP2M6Bw2QXSkoXtmv'
    },
    {
      name:'ferari',
      color:'blue',
      model:2019,
      price: 2000,
      type:'vdghsjk',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRejMiezK1GedBoeEz73uMQH3Ij-FEItVHkw8CYuWETXEyJH1AnkA'
    },
    {
      name:'fbhjn',
      color:'blugbhe',
      model:2019,
      price: 2000,
      type:'vdghgvjmfkcdsjk',
      image:'https://car-images.bauersecure.com/pagefiles/84674/2019bmwi8-roadster-01.jpg'
    },
    {
      name:'ford',
      color:'yellow',
      model:2022,
      price: 6000,
      type:'car',
      image:'https://cdn2.autoexpress.co.uk/sites/autoexpressuk/files/2018/05/_86a0671.jpg'
    }
    // https://cdn2.autoexpress.co.uk/sites/autoexpressuk/files/2018/05/_86a0671.jpg
    
  ]
  constructor(private router: Router) {}


  goToDetail(item){
    console.log(item);
    this.router.navigate(['/detail']);
  }

}
