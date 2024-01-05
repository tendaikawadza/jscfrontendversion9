import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PurchaseRoutingModule } from './purchase-routing.module';
import { PurchaserequestComponent } from './purchaserequest/purchaserequest.component';
import { PurchaserequestDetailsComponent } from './purchaserequest-details/purchaserequest-details.component';
import { PurchaserequestAddComponent } from './purchaserequest-add/purchaserequest-add.component';
import { PurchaseComponent } from './purchase.component';
import { TabViewModule } from 'primeng/tabview';
import { CustomerService } from '../service/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { BrowserModule } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';
import { MessageService } from 'primeng/api';
import { SignaturePadModule } from 'angular2-signaturepad';


@NgModule({
  declarations: [
    PurchaserequestComponent,
    PurchaserequestDetailsComponent,
    PurchaserequestAddComponent,
    PurchaseComponent,
  ],
  imports: [
    CommonModule,
    SignaturePadModule,
    DialogModule,
    CalendarModule,
    TabViewModule,
    PurchaseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    ProgressBarModule,
    InputNumberModule,
    InputTextModule,
    InputTextareaModule,
    TimelineModule,
    CardModule,
    DropdownModule,
  ],
  providers: [CustomerService,MessageService],
})
export class PurchaseModule {}
