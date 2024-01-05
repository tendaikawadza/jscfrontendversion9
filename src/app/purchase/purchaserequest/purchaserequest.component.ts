import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  BehaviorSubject,
  Observable,
  catchError,
  map,
  of,
  startWith,
  switchMap,
} from 'rxjs';
import { DataState } from 'src/app/enum/datastate.enum';
import { CustomHttpResponse, Page } from 'src/app/interface/appstates';
import { Invoice } from 'src/app/interface/invoice';
import { State } from 'src/app/interface/state';
import { User } from 'src/app/interface/user';
import { CustomerService } from 'src/app/service/customer.service';
import { NotificationService } from 'src/app/service/notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { purchaserequestService } from 'src/app/service/purchaserequest.service';
import { Table } from 'primeng/table';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { SignaturePad } from 'angular2-signaturepad';
import {jsPDF} from 'jspdf';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';



@Component({
  selector: 'app-purchaserequest',
  templateUrl: './purchaserequest.component.html',
  styleUrls: ['./purchaserequest.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PurchaserequestComponent implements OnInit {
  constructor(
    private purchaserequestService: purchaserequestService,
    private customerService: CustomerService,
    private messageservice: MessageService,
    public fb: FormBuilder,
    private activatedRoute: ActivatedRoute

  ) {}
  visible = false;
  viewmodal = false;  
  displayModal:boolean=false;
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
  purchaserequests: any[];
  purchaseRequestState$: Observable<State<CustomHttpResponse<any>>>;
  private dataSubject = new BehaviorSubject<any>(null);
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();
  readonly DataState = DataState;
  purchaserequest: any;
  state: any;
  events: string[];
  PURCHACE_ID = 'id';
purchaeDetails:any;
  @ViewChild(SignaturePad) signaturePad: SignaturePad;

  ngOnInit(): void {
    this.getALlPurchaserequests();
    this.formSetup();
  }

  purchaseDetails() {
    this.events = ['2020', '2021', '2022', '2023'];
    this.purchaseRequestState$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: any) => {
        return this.customerService.invoice$(+params.get(this.PURCHACE_ID)).pipe(
          map((response) => {
            //  this.notification.onDefault(response.message);
            console.log(response);
            this.dataSubject.next(response);
            return { dataState: DataState.LOADED, appData: response };
          }),
          startWith({ dataState: DataState.LOADING }),
          catchError((error: string) => {
            // this.notification.onError(error);
            return of({ dataState: DataState.ERROR, error });
          })
        );
      })
    );
  }
  viewDetails(item:any) {
    this.viewmodal = true;
    this.purchaeDetails=item;

    this.customerService.getPurchaseDetails(item?.id, '');
  }

  ngAfterViewInit() {
    this.signaturePad.set('minWidth', 5);
    this.signaturePad.clear();
  }

  drawComplete() {
    console.log(this.signaturePad.toDataURL());
  }

  drawStart() {
    console.log('begin drawing');
  }

  formSetup() {
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

  showModal(){

    this.displayModal=true;
  }

  createPurchaserrequests(item: any) {
    this.purchaserequestService.createpurchaserequest(item);
  }

  addnew() {
    this.visible = true;
  }

  deletepurchaserequest(item: any) {
    // this.purchaserequestService.delete$(item);
  }

  getALlPurchaserequests() {
    this.purchaserequestService
      .getAllpurchaserequest()
      .subscribe((data: any) => {
        this.purchaserequests = data;
        console.log(this.purchaserequests, 'this.purchaserequests:::::');
      });
  }

  editpurchaserequestaction(_t36: any) {
    throw new Error('Method not implemented.');
  }

  clear(_t14: Table) {
    throw new Error('Method not implemented.');
  }
  getEventValue($event: Event): any {
    throw new Error('Method not implemented.');
  }

  newInvoice(): void {
    if (this.myForm.invalid) {
      return;
    }

    const obj = {};
    const tmparr: any = [];

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

  
exportAsPDF(): void {
  const filename = `purchaserequest-${this.dataSubject.value.data['purchaserequest'].purchaserequestNumber}.pdf`;
  const doc = new jsPDF();
  const element = document.getElementById('purchaserequest');
  if (element) {
    doc.html(element, {
      margin: 5,
      windowWidth: 1000,
      width: 200,
      callback: () => {
        doc.save(filename);
      }
    });
  }
}    

}
