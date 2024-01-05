import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-assets-add',
  templateUrl: './assets-add.component.html',
  styleUrls: ['./assets-add.component.css']
})
export class AssetsAddComponent implements OnInit {
  assetform: FormGroup;
  constructor(private fb: FormBuilder, private csSvc: CustomerService,private messageservice:MessageService) { }
  ngOnInit(): void {
    this.assetform = this.fb.group({
      dateofreceipt: ['', Validators.required],
      assertdescription: ['', Validators.required],
      assertnumber: ['', Validators.required],
      serialnumber: ['', Validators.required],
      invoicenumber: ['', Validators.required],
      location: ['', Validators.required],
      quantity: ['', Validators.required],
      remarks: ['', Validators.required],


    });
  }
  submitForm() {
    this.csSvc.addAssets(this.assetform.value);
    this.messageservice.add({ severity: 'success', summary: 'Successful', detail:'Succsssfull Added Assets Information', life: 3000 });
  }
}
