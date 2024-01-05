import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { Centralinventorystationerypens } from 'src/app/interface/centralinventorystationerypens';
import { Stock } from 'src/app/model/stock';

@Component({
  selector: 'app-centralinventorystationerypens',
  templateUrl: './centralinventorystationerypens.component.html',
  styleUrls: ['./centralinventorystationerypens.component.css']
})
export class CentralinventorystationerypensComponent implements OnInit {
  productDialog: boolean = false;
  submitted: any;

  addProductForm: FormGroup<any>;
  ngOnInit(): void {
    
  }
editProduct(_t124: any) {
throw new Error('Method not implemented.');
}
fb: any;
  messageService: any;
  confirmationService: any;
  isEdit: boolean;
  InventoryService: any;

hideDialog() {
throw new Error('Method not implemented.');
}
f: any;
logout() {
throw new Error('Method not implemented.');
}
products: any[];
openNew() {
this.productDialog=true;
}
getPcode(arg0: any) {
throw new Error('Method not implemented.');
}
selectedProducts: any;
pcodeList: any[];
selectedCode: any;


editCentralinventorystationerypens(product: Centralinventorystationerypens) {
  this.isEdit = true;
  this.addProductForm.patchValue(product);
  this.productDialog = true;

}



onSubmit() {
  console.log(this.addProductForm.value)
  if (this.addProductForm.invalid) {
      return
  }
  const item = this.addProductForm.value;
  this.submitted = true;
  if (this.isEdit === false) {          
      console.log(item);
      this.InventoryService.addProduct(item).subscribe((data: any) => {
          if (data) {
              this.products.push(item);
              this.messageService.add({ severity: 'success', summary: 'Product successfully added to the catalog', detail: 'Via MessageService' });
          }
          else {
              this.messageService.add({ severity: 'success', summary: 'Product could not be Added to the catalog : Check Specification of your product', detail: 'Via MessageService' });
          }
          this.productDialog = false;

      })
  } else {

      this.InventoryService.updateProducts(item.productId, item).subscribe((data: any) => {
          if (data) {
              this.getAllCentralinventorystationerypens();
              this.messageService.add({ severity: 'success', summary: 'Product successfully Updated to the catalog', detail: 'Via MessageService' });
          }
          else {
              this.messageService.add({ severity: 'success', summary: 'Product could not be Updated to the catalog : Check Specification of your product', detail: 'Via MessageService' });
          }
          this.productDialog = false;

      })

      this.products = [...this.products];
      this.productDialog = false;
      

  }

}
  getAllCentralinventorystationerypens() {
    throw new Error('Method not implemented.');
  }




deleteSelectedCentralinventorystationerypen() {
  this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected product?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
          this.products = this.products.filter(val => !this.selectedProducts.includes(val));
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Products Deleted', life: 3000 });
      }
  });
}


// getAllproducts() {
//   this.productService.getAllProducts().subscribe(data => {
//       console.log(data)
//       this.products = data;    
//       this.orignalData =data;         
//       const mp:any = new Map(data.map((o: { productCode: any; }) => [o.productCode, { ...o, count: 0 }]));

//       for (const { productCode } of data) {
//         mp.get(productCode).count++;
//       }

forms(){
  this.addProductForm = this.fb.group({
      date: ['', [Validators.required]],
      productName: ['', [Validators.required]],
      productCode: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      productId: [''],

  });
}

}
