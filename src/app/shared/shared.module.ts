import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



import { CardModule, } from 'primeng/card';
import { MenuModule } from 'primeng/menu';
import { StepsModule } from 'primeng/steps';



import { CommonModule } from "@angular/common";
import { ExtractArrayValue } from "../pipes/extractvalue.pipe";
import { AppComponent } from "../app.component";



@NgModule({
  declarations: [
ExtractArrayValue
  ],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule
    

  ],
 exports : [ 
  RouterModule,
  CommonModule,
  FormsModule


  
 ]

  

})
export class SharedModule {



}








