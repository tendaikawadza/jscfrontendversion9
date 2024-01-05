import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-stockitemrequest-add',
  templateUrl: './stockitemrequest-add.component.html',
  styleUrls: ['./stockitemrequest-add.component.css'],
})
export class StockitemrequestAddComponent implements OnInit {
  purchaserequests:any=[];
  selecteddepartmentcode:any=[];
  viewmodal=false;
  ngOnInit(): void {
    
  }
  deletepurchaserequest(_t53: any) {
    throw new Error('Method not implemented.');
  }
  editpurchaserequestaction(_t53: any) {
    throw new Error('Method not implemented.');
  }
  viewDetails(_t53: any) {
    throw new Error('Method not implemented.');
  }
  gridRows: any;
  stockItemRequestDetails: any;
  visible: any;
  clearSignature() {
    throw new Error('Method not implemented.');
  }
  onFileSelected($event: Event) {
    throw new Error('Method not implemented.');
  }

  newstockitemrequests(){}
  addnew(){}
  addRow() {
    throw new Error('Method not implemented.');
  }
  removeRow(_t56: number) {
    throw new Error('Method not implemented.');
  }
  myForm: FormGroup<any>;
  newstockitemrequest() {
    throw new Error('Method not implemented.');
  }
}
