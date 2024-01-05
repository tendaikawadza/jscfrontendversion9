import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataState } from 'src/app/enum/datastate.enum';
import { CustomHttpResponse } from 'src/app/interface/appstates';
import { Customer } from 'src/app/interface/customer';
import { State } from 'src/app/interface/state';
import { User } from 'src/app/interface/user';
import { CustomerService } from 'src/app/service/customer.service';
import { NotificationService } from 'src/app/service/notification.service';

@Component({
  selector: 'app-purchaserequest-add',
  templateUrl: './purchaserequest-add.component.html',
  styleUrls: ['./purchaserequest-add.component.css'],
})
export class PurchaserequestAddComponent implements OnInit {
  private dataSubject = new BehaviorSubject<any>(null);
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();
  readonly DataState = DataState;
  date: any;
  signatureImg: string;
  // @ViewChild(SignaturePad) signaturePad: SignaturePad;
  myForm: FormGroup;
  signaturePadOptions: Object = {
    minWidth: 2,
    canvasWidth: 700,
    canvasHeight: 300,
  };
  files: any;
  userId: any = localStorage.getItem('user');
  departmentcode: any;
  selecteddepartmentcode: { name: string; code: string }[];

  constructor(
    private customerService: CustomerService,
    private messageservice: MessageService,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      date: ['', Validators.required],
      departmentCode: ['', Validators.required],
      receiverEmail: ['', Validators.required],
      reason: ['', Validators.required],
      itemDescription: ['', Validators.required],
      itemNumber: ['', Validators.required],
      unitPrice: ['', Validators.required],
      estimatedValue: ['', Validators.required],
      quantity: ['', Validators.required],
    });
    this.selecteddepartmentcode = [
      { name: 'IT', code: 'ITPR12' },
      { name: 'FINANCE', code: 'FINPR12' },
      { name: 'ADMINSTRATION', code: 'ADMINPR13' },
      { name: 'ACCOUNTS', code: 'ACCPR14' },
      { name: 'HUMANRESOURSE', code: 'HRPR15' },
    ];
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      name: null,
      description: null,
      qty: null,
    });
  }
  ngAfterViewInit() {
    // this.signaturePad is now available
    // this.signaturePad.set('minWidth', 2);
    // this.signaturePad.clear();
  }

  drawComplete() {
    //  console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  clearSignature() {
    // this.signaturePad.clear();
  }

  savePad() {}
  onFileSelected(event: Event): void {
    const inputElement: any = event.target as HTMLInputElement;
    if (inputElement.files.length > 0) {
      const file = inputElement.files[0];

      const reader = new FileReader();

      reader.onload = (e: any) => {
        const uint8Array = new Uint8Array(e.target.result);
        console.log('Uint8Array:', uint8Array);

        const byteArray = this.uint8ArrayToByteArray(uint8Array);
        console.log(byteArray);
        this.files = byteArray;
      };

      reader.readAsArrayBuffer(file);
    }
  }
  uint8ArrayToByteArray(uint8Array: Uint8Array): number[] {
    const byteArray: number[] = [];

    for (let i = 0; i < uint8Array.length; i++) {
      byteArray.push(uint8Array[i]);
    }

    return byteArray;
  }

  newInvoice(): void {
  
    if (this.myForm.invalid) {
      return;
  }
  
      const obj = {};
      const tmparr: any = [];
      this.dataSubject.next({ ...this.dataSubject.value, message: null });
      this.isLoadingSubject.next(true);
      // console.log(this.signatureImg);resobj
      // console.log(this.myForm.value)
      const resobj = this.myForm.value;

      resobj['signature'] = 'test';
      resobj['departmentCode'] = resobj['departmentCode']?.code;
      console.log(resobj);
      tmparr.push(resobj);
      this.customerService.createpurchaserequest(tmparr).subscribe((res) => {
        console.log(res);
        this.messageservice.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Succsssfull Added Purchase Information',
          life: 3000,
        });
      });
   
  }
}
