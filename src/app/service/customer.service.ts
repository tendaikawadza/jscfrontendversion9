import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpEvent, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { CustomHttpResponse, CustomerState, Page, Profile } from '../interface/appstates';

import { Key } from '../enum/key.enum';
import { Stats } from '../interface/stats';
import { Customer } from '../interface/customer';
import { Invoice } from '../interface/invoice';
import { Subject } from 'rxjs';
import { Issue } from '../interface/issue';
import { User } from '../model/user';
import { environment } from 'src/environments/environment';
@Injectable()

export class CustomerService {

    private valueSource = new Subject<string>();
    valueUpdate = this.valueSource.asObservable()

    private assetInfo = new Subject<User>();
    $assetObservable = this.assetInfo.asObservable();

    server: string = 'http://localhost:8080';
    qtSerach: any;
    constructor(private http: HttpClient) { }
    addAssets(asset: any) {
        this.assetInfo.next(asset);
    }
    public addPurchahse(product: any): Observable<any> {
        let url = `${environment.apiUrl}/purchaserequest/upload`;
        return this.http.post<any>(url, product);
    }

    public createPurchahse(product: any): Observable<any> {
        let url = `${environment.apiUrl}/purchase-requisition/create`;
        return this.http.post<any>(url, product);
    }

    setValue(value: any) {
        this.qtSerach = value;
    }
    getVal() {
        return this.qtSerach;
    }

    customers$ = (page: number = 0) => <Observable<CustomHttpResponse<Page<Customer> & User & Stats>>>
        this.http.get<CustomHttpResponse<Page<Customer> & User & Stats>>
            (`${environment.apiUrl}/customer/list?page=${page}`)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    customer$ = (customerId: number) => <Observable<CustomHttpResponse<CustomerState>>>
        this.http.get<CustomHttpResponse<CustomerState>>
            (`${environment.apiUrl}/customer/get/${customerId}`)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    update$ = (customer: Customer) => <Observable<CustomHttpResponse<CustomerState>>>
        this.http.put<CustomHttpResponse<CustomerState>>
            (`${environment.apiUrl}/customer/update`, customer)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    searchCustomers$ = (name: string = '', page: number = 0) => <Observable<CustomHttpResponse<Page<Customer> & User>>>
        this.http.get<CustomHttpResponse<Page<Customer> & User>>
            (`${environment.apiUrl}/customer/search?name=${name}&page=${page}`)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    newCustomers$ = (customer: Customer) => <Observable<CustomHttpResponse<Customer & User>>>
        this.http.post<CustomHttpResponse<Customer & User>>
            (`${environment.apiUrl}/customer/create`, customer)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    newInvoice$ = () => <Observable<CustomHttpResponse<Customer[] & User>>>
        this.http.get<CustomHttpResponse<Customer[] & User>>
            (`${environment.apiUrl}/purchaserequests/insert`)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    createInvoice$ = (customerId: number, invoice: Invoice) => <Observable<CustomHttpResponse<Customer[] & User>>>
        this.http.post<CustomHttpResponse<Customer[] & User>>
            (`${environment.apiUrl}/customer/invoice/addtocustomer/${customerId}`, invoice)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    invoices$ = (page: number = 0) => <Observable<CustomHttpResponse<Page<Invoice> & User>>>
        this.http.get<CustomHttpResponse<Page<Invoice> & User>>
            (`${environment.apiUrl}/purchase/list`)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    invoice$ = (invoiceId: number) => <Observable<CustomHttpResponse<Customer & Invoice & User>>>
        this.http.get<CustomHttpResponse<Customer & Invoice & User>>
            (`${environment.apiUrl}/customer/invoice/get/${invoiceId}`)
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    downloadReport$ = () => <Observable<HttpEvent<Blob>>>
        this.http.get(`${environment.apiUrl}/customer/download/report`,
            { reportProgress: true, observe: 'events', responseType: 'blob' })
            .pipe(
                tap(console.log),
                catchError(this.handleError)
            );

    private handleError(error: HttpErrorResponse): Observable<never> {
        console.log(error);
        let errorMessage: string;
        if (error.error instanceof ErrorEvent) {
            errorMessage = `A client error occurred - ${error.error.message}`;
        } else {
            if (error.error.reason) {
                errorMessage = error.error.reason;
                console.log(errorMessage);
            } else {
                errorMessage = `An error occurred - Error status ${error.status}`;
            }
        }
        return throwError(() => errorMessage);
    }


    // createIssue$ = (issueId: number) => <Observable<CustomHttpResponse<issue >>>
    //     this.http.post<CustomHttpResponse<issue>>
    //         (`${environment.apiUrl}/issue/create/${issueId}`)
    //         .pipe(
    //             tap(console.log),
    //             catchError(this.handleError)
    //         );


    // Method to collect issues
    AllIssue$ = (): Observable<any> => {
        // Make an HTTP GET request to the `${environment.apiUrl}/issues/all` endpoint
        return this.http.get<CustomHttpResponse<any>>(`${environment.apiUrl}/issues/all`)
            .pipe(
                // Log the emitted values to the console for debugging
                tap(console.log),

                // Catch any errors that occur during the observable stream
                catchError(this.handleError)
            );
    };




    // Method to get a single issue
    getIssue$ = (issueId: number = 1): Observable<CustomHttpResponse<Issue>> => {
        // Make an HTTP POST request to the `${environment.apiUrl}/issue/get/${issueId}` endpoint
        return this.http.get<CustomHttpResponse<Issue>>(`${environment.apiUrl}/issue/get/${issueId}`)
            .pipe(
                // Log the emitted values to the console for debugging
                tap(console.log),

                // Catch any errors that occur during the observable stream
                catchError(this.handleError)
            );
    };
  

          
  
    public createpurchaserequest(FormData: any): Observable<HttpErrorResponse> {
        return this.http.post<any>(`${environment.apiUrl}/purchase-requisition/createlist`,FormData);  
        
    }  
    getPurchaseDetails(id:any, userid:any) {
        return this.http.get<any>(`${environment.apiUrl}/purchase-requisition/user/${id}/${userid}`);  
      }





    updateValue(value: string) {
        this.valueSource.next(value);
    }
}







