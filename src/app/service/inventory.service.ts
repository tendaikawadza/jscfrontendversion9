
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { Centralinventorystationerypens } from '../interface/centralinventorystationerypens'; 


@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http:HttpClient) { }
getcentralinventorystationerypens():Observable<Centralinventorystationerypens[]>{
  return this.http.get<Centralinventorystationerypens[]>('wkwkek/wew');
  
}


getcentralinventorystationerypen():Observable<Centralinventorystationerypens[]>{
  return this.http.get<Centralinventorystationerypens[]>('wkwkek/wew');
  
}

deletecentralinventorystationerypen(id: number): Observable<any> {
  const url = `wkwkek/wew/${id}`;
  return this.http.delete(url);
}

updatecentralinventorystationerypen(id: number, updatedItem: Centralinventorystationerypens): Observable<Centralinventorystationerypens> {
  const url = `wkwkek/wew/${id}`;
  return this.http.put<Centralinventorystationerypens>(url, updatedItem);
}

  
}
