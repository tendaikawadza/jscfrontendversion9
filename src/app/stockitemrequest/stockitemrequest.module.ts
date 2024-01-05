import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockitemrequestRoutingModule } from './stockitemrequest-routing.module';
import { StockitemrequestComponent } from './stockitemrequest.component';
import { StockitemrequestAddComponent } from './stockitemrequest-add/stockitemrequest-add.component';
import { StockitemrequestViewComponent } from './stockitemrequest-view/stockitemrequest-view.component';
import { StockitemrequestDetailsComponent } from './stockitemrequest-details/stockitemrequest-details.component';
import { TabPanel, TabViewModule } from 'primeng/tabview';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { TimelineModule } from 'primeng/timeline';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';



@NgModule({
  declarations: [
    StockitemrequestComponent,
    StockitemrequestAddComponent,
    StockitemrequestViewComponent,
    StockitemrequestDetailsComponent
  ],
  imports: [
    CommonModule,
    StockitemrequestRoutingModule,
    TabViewModule,
    DialogModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,    
    TableModule,
    ButtonModule,
  
    ProgressBarModule,
   
    TimelineModule,
    CardModule,
  ]
})
export class StockitemrequestModule { }
