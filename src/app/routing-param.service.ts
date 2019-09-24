import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutingParamService {
  item:any;
  constructor() { }

  public setItem(objectVal){
    this.item = objectVal;
  }
  public getParam(){
    return this.item;
  }
}
