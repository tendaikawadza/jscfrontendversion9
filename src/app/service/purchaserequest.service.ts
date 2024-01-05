import { Observable } from 'rxjs';
import { CustomHttpRespone } from '../model/custom-http-response';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class purchaserequestService {
  server: any;
  host: any = environment.apiUrl;

  constructor(private http: HttpClient) {}

  public createpurchaserequest(Form: any): Observable<any | HttpErrorResponse> {
    return this.http.post<any>(
      '${this.host}/purchase-requisition/create',
      FormData
    );
  }

  getAllpurchaserequest() {
    const url = `${this.host}/purchase-requisition/all`;
    return this.http.get<any[]>(url);
  }
  // you can contionue here
}
