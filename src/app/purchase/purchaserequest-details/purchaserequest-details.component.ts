import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { jsPDF as pdf } from 'jspdf';
import { PrimeIcons } from 'primeng/api';
import { BehaviorSubject, Observable, catchError, map, of, startWith, switchMap } from 'rxjs';
import { DataState } from 'src/app/enum/datastate.enum';
import { CustomHttpResponse } from 'src/app/interface/appstates';
import { Customer } from 'src/app/interface/customer';
import { Invoice } from 'src/app/interface/invoice';
import { State } from 'src/app/interface/state';
import { User } from 'src/app/interface/user';
import { CustomerService } from 'src/app/service/customer.service';
import { NotificationService } from 'src/app/service/notification.service';


const PURCHACE_ID = 'id';
@Component({
  selector: 'app-purchaserequest-details',
  templateUrl: './purchaserequest-details.component.html',
  styleUrls: ['./purchaserequest-details.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PurchaserequestDetailsComponent implements OnInit {
  purchaseRequestState$: Observable<State<CustomHttpResponse<any>>>;
  private dataSubject = new BehaviorSubject<any>(null);
  private isLoadingSubject = new BehaviorSubject<boolean>(false);
  isLoading$ = this.isLoadingSubject.asObservable();
  readonly DataState = DataState;
purchaserequest: any;
state: any;
events: string[];

 
  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private notification: NotificationService) { }
  events1: any[];

  events2: any[];
  ngOnInit(): void {
    this.events = [
      "2020", "2021", "2022", "2023"
  ];
    this.purchaseRequestState$ = this.activatedRoute.paramMap.pipe(
      switchMap((params: any) => {
        return this.customerService.invoice$(+params.get(PURCHACE_ID))
          .pipe(
            map(response => {
            //  this.notification.onDefault(response.message);
              console.log(response);
              this.dataSubject.next(response);
              return { dataState: DataState.LOADED, appData: response };
            }),
            startWith({ dataState: DataState.LOADING }),
            catchError((error: string) => {
             // this.notification.onError(error);
              return of({ dataState: DataState.ERROR, error })
            })
          )
      })
    );
    this.getEvents();
  }

  exportAsPDF(): void {
    const filename = `invoice-${this.dataSubject.value.data['invoice'].invoiceNumber}.pdf`;
    const doc = new pdf();
   // doc.html(document.getElementById('invoice'), { margin: 5, windowWidth: 1000, width: 200,
     // callback: (invoice) => invoice.save(filename) });
  }
getEvents(){

  this.events1 = [
    {
      status: "INITIATION BY ADMINISTRATION",
      date: "15/10/2020 10:30",
      icon: PrimeIcons.SHOPPING_CART,
      color: "#9C27B0",
      image: "game-controller.jpg"
    },
    {
      status: "APPROVAL BY PRINICIPAL ADMINISTRATION OFFICER",
      date: "15/10/2020 14:00",
      icon: PrimeIcons.COG,
      color: "#673AB7"
    },
    {
      status: "AUTHORAZATION BY HEAD OF ADMINISTRATION",
      date: "15/10/2020 16:15",
      icon: PrimeIcons.ENVELOPE,
      color: "#FF9800"
    },
    {
      status: "SUBMISSION TO BOARD OF SURVEY BY HEAD OF ADMISTRATION",
      date: "16/10/2020 10:00",
      icon: PrimeIcons.CHECK,
      color: "#607D8B"
    },
    {
      status: "SUBMISSION TO SECRETARY BY HEAD OF ADMISTRATION",
      date: "15/10/2020 10:30",
      icon: PrimeIcons.SHOPPING_CART,
      color: "#9C27B0",
      image: "game-controller.jpg"
    },
    {
      status: "COMPLETTION BY INITIATOR",
      date: "15/10/2020 10:30",
      icon: PrimeIcons.SHOPPING_CART,
      color: "#9C27B0",
      image: "game-controller.jpg"
    }
  ];

 this.events2 = ["2020", "2021", "2022", "2023"];
}

}



