import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-assets-view',
  templateUrl: './assets-view.component.html',
  styleUrls: ['./assets-view.component.css']
})
export class AssetsViewComponent implements OnInit {

  constructor( private csSvc: CustomerService) { }
  assetData:any=[];
  ngOnInit(){
    this.csSvc.$assetObservable.subscribe((assetData:any)=>{
this.assetData.push(assetData);
    })
  }
}
