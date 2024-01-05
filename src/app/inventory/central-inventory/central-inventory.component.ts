
import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/service/authentication.service';



@Component({
  selector: 'app-central-inventory',
  templateUrl: './central-inventory.component.html',
  styleUrls: ['./central-inventory.component.css'],
  providers: [DatePipe]
})
export class CentralInventoryComponent implements OnInit {




  addProductForm: FormGroup


  submitted = false;
  selectedProducts: any;
  pcodeList: any;
  selectedCode: any;
  products: any;
  productDialog: any;



  constructor(private router: Router, private auth: AuthenticationService,
    private fb: FormBuilder) { }
  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      dateReceived: ['', Validators.required],
      fromWhomreceived: ['', Validators.required],
      productreceived: ['', Validators.required],
      quantityReceived: ['', Validators.required],
      receiptvoichernumber: ['', Validators.required],


    });
  }


  get f(): { [key: string]: AbstractControl } {
    return this.addProductForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    console.log(this.addProductForm.value)
  }
  openNew() {
    throw new Error('Method not implemented.');
  }
  deleteSelectedProducts() {
    throw new Error('Method not implemented.');
  }
  getPcode(arg0: any) {
    throw new Error('Method not implemented.');
  }
  logout() {
    throw new Error('Method not implemented.');
  }
  editProduct(_t42: any) {
    throw new Error('Method not implemented.');
  }
  deleteProduct(_t42: any) {
    throw new Error('Method not implemented.');
  }
  hideDialog() {
    throw new Error('Method not implemented.');
  }


  items = [
    { label: 'Home', icon: 'pi pi-fw pi-home' },
    { label: 'Settings', icon: 'pi pi-fw pi-cog' },
    { label: 'Logout', icon: 'pi pi-fw pi-power-off' },
  ];






}
