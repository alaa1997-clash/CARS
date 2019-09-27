import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
@Injectable({
  providedIn: 'root'
})
export class ContentfulService {
  // use to connect app with contentful cloud
  private client = createClient({
    space: '40p2k0sr05kh',
    accessToken: 'iSKJ6pzWDRzGSrVFx1pUxIXwJQKIKq946cW3XLKmlE0'
  });
  constructor() { }

  // return all field without query 
  getCars(query?: object): Promise<Entry<any>[]>{
    return this.client.getEntries(Object.assign({
      content_type: 'car'
    }, query))
      .then(res => res.items);
  }
  getCar(carid): Promise<Entry<any>> {
    return this.client.getEntries(Object.assign({
     content_type: 'car'
    }, {'sys.id': carid}))
      .then(res => res.items[0]);
  }
  getCarByType(carType): Promise<Entry<any>[]> {
    return this.client.getEntries(Object.assign({
     content_type: 'car'
    }, {'fields.type': carType}))
      .then(res => res.items);
  }
}
