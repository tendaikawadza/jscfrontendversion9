import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetsmanageRoutingModule } from './assetsmanage-routing.module';
import { AssetsmanageComponent } from './assetsmanage.component';
import { AssetsAddComponent } from './assets-add/assets-add.component';
import { AssetsViewComponent } from './assets-view/assets-view.component';
import {TabViewModule} from 'primeng/tabview';
import { CustomerService } from '../service/customer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputSwitchModule } from 'primeng/inputswitch';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
@NgModule({
  declarations: [
    AssetsmanageComponent,
    AssetsAddComponent,
    AssetsViewComponent
  ],
  imports: [
    CommonModule,
    AssetsmanageRoutingModule,
    TabViewModule,
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
    ToastModule

    
  ],
  providers: [CustomerService ],
})
export class AssetsmanageModule { }
