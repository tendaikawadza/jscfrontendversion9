import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { stockitemrequest } from '../model/stockitemrequest';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockitemrequestService {
  private stockitemrequestURL = environment.stockUrl;

  


  server: any;

  constructor(private http:HttpClient) {}



    public getstockitemrequest(): Observable<stockitemrequest[] | HttpErrorResponse> {

      return this.http.get<stockitemrequest[]>('${this.host}/api/stoctitemrequest/stockitemrequests');
  
    }


  

  public addstockitemrequest(FormData: any): Observable<stockitemrequest | HttpErrorResponse> {
    return this.http.post<stockitemrequest>('${this.host}/api/stoctitemrequest', FormData);

  

}


delete$(stockitemrequest:any){
  let url=`${this.server}/user/delete/${stockitemrequest.id}`;    
  return this.http.delete<any>(url);        
 }

 getAllUsers(): Observable<any> {
  return this.http.get<any>('/list');
}

updatestockitemrequest(stockitemrequest:stockitemrequest):Observable<stockitemrequest>{

  return this.http.put<stockitemrequest>('${this.api}/api/stoctitemrequest/${stockitemrequest.id}', stockitemrequest);
}




}